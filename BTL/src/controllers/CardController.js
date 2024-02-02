const cardService = require("../services/cardService");

class CardController{
    create = async (req, res, next) => {
        try {
            const {title,idList,describe,member,due_date} = req.body;

            if(req.files) {
                //kiểm tra xem có tệp đính kèm ảnh bìa ("cover") được gửi trong yêu cầu không
                //Nếu có, xử lý chúng và lưu đường dẫn tương ứng vào các biến "coverPath" và "attachmentPaths"
                const cover = req.files ? req.files['cover'] : null;
                const coverPath = cover ? cover[0].path : null;
                
                // Xử lý attachment
                const attachment = req.files ? req.files['attachment'] : null;
                const attachmentPaths = attachment ? attachment.map(file => file.path) : [];
    
                var data = {
                    title, describe, member, due_date,
    
                    cover: coverPath, 
                    idList,
                    // attachment
                    attachment: attachmentPaths
                }
            }     
    
            let dataCard = {idList};
            const list = await cardService.checkIDList(dataCard)
    
            if(list) {
                const card = await cardService.create(data);
                res.status(200).json({
                    card
                })
            } else { 
                res.status(404).json({
                    'msg': 'Tạo card thất bại'
                })
            }
        
            
        } catch (error) {
            throw error;
        }
    };

    getAll = async(req, res, next) =>{
        try {
            const {idList} = req.params;
            const cards = await cardService.getAll(idList);
            res.status(200).json({
                cards
            });
        } catch (error) {
           throw error;
        }
    }

    //xem chi tiet 1 card
    getCard = async (req, res, next) => {
        try {
            const {idCard} = req.params;
            // Goi den service
            const card = await cardService.getCard(idCard);
            res.status(200).json({
                card
            });
        } catch (error) {
            throw error;
        }
    };

    update = async (req, res, next) => {
        try {
            const {title, describe, member, due_date } = req.body;
        const {idCard} = req.params;
        if(req.files) {
              // Xử lý cover
            const cover = req.files ? req.files['cover'] : null;
            const coverPath = cover ? cover[0].path : null;
            

            // Xử lý attachment
            const attachment = req.files ? req.files['attachment'] : null;
            const attachmentPaths = attachment ? attachment.map(file => file.path) : [];

            var data = {
                title, describe, member, due_date,

                cover: coverPath, 
                // attachment
                attachment: attachmentPaths
            }
        }     

        const result = await cardService.update(idCard, data)
        console.log(result)
        if(result) {
            res.status(200).json({
                'msg': 'Updated card'
            })
        } else { 
            throw new Error('Update failed');
        }
        } catch (error) {
            next(error);
        }
      };
    delete = async (req, res, next) => {
        try {
          const { idCard } = req.params;
      
          const card = await cardService.delete(idCard);
      
          if (card) {
            res.status(200).json({ 'msg': 'Card deleted successfully!' });
          } else {
            throw new Error('Fail');
          }
        } catch (error) {
          throw error;
        }
    };
}

module.exports = new CardController();