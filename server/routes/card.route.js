import express from 'express';
import userController from '../controllers/card.controller';


const router = express.Router();

router.get('/list_Vcard',
    userController.list_Vcard);

router.post('/create_Vcard',
// You can do some validations here
    userController.create_Vcard);

router.post('/fund_Vcard',
// You can do some validations here
    userController.fund_Vcard);

router.post('/pay',
// You can do some validations here
    userController.pay_Vcard);



export default router;
