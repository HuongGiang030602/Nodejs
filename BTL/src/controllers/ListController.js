const listService = require("../services/listService");

class ListController{
    create = async (req, res, next) => {
        try {
            const {title,idBoard} = req.body;

            let data = {
                title,
                idBoard
            };

            let id = {idBoard};

            const result = await listService.checkIDBoard(id);

            if (!result) {
                res.status(401).json({
                    message: 'idBoard không tồn tại !'
                })
            }else {
                const list = await listService.create(data);
                res.status(200).json({
                    list
                });
            }
            
        } catch (error) {
            res.status(401).json({
                message: 'Lỗi server !'
            })
        }
    };

    getAll = async(req, res, next) =>{
        try {
            const {idBoard} = req.params;
            const lists = await listService.getAll(idBoard);
            res.status(200).json({
                lists
            });
        } catch (error) {
           throw error;
        }
    }

    update = async (req, res, next) => {
        try {
            const {idList} = req.params;
            
            const { title} = req.body;
        
            // Tạo object mới chứa thông tin cập nhật
            let data = {
                title
            };
        
            const result = await listService.update(idList, data);
        
            res.status(200).json({
                list: result
            });
        } catch (error) {
            next(error);
        }
      };
    delete = async (req, res, next) => {
        try {
          const { idList } = req.params;
      
          const list = await listService.delete(idList);
      
          if (list) {
            res.status(200).json({ 'msg': 'List deleted successfully!' });
          } else {
            throw new Error('Fail');
          }
        } catch (error) {
          throw error;
        }
    };
}

module.exports = new ListController();