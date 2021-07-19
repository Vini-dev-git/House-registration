import { Router } from 'express';
import Sessioncontroller from './controllers/SessionController';
import HouseController from './controllers/Housecontroller';
import multer from 'multer'
import uploadConfig from './config/upload'
import DashboardController from './controllers/DashBoardController';
import ReserveController from './controllers/ReserveController';


const routes = new Router();
const upload = multer(uploadConfig)

routes.post('/sessions', Sessioncontroller.store)

routes.post('/houses', upload.single('thumbnail') ,HouseController.store)
routes.get('/houses', HouseController.index)
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)
routes.delete('/houses', HouseController.destroy);

routes.get('/dashboard', DashboardController.show);

routes.post('/houses/:house_id/reserve', ReserveController.store);
routes.get('/reserves', ReserveController.index);
routes.delete('/reserves/cancel', ReserveController.destroy);

export default routes;