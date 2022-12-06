const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const app = express();

//Khoi tao web router
const initUserRoute = (app) => {
    //<=> route.get('/', (req, res) => {res.render('index.ejs)})
    router.get('/', userController.getHomepage);
    //truyền thso vào url
    router.get('/products/details/:id', userController.getDetailProductPage);
    router.get('/list-order', userController.getListOrderPage);
    router.get('/my-profile/profile', userController.getProfilePage);
    router.get('/my-profile/change-password', userController.getUpdatePasswordPage);
    router.get('/my-profile/list-orders-status', userController.getListOrderStatusPage);
    router.get('/payment', userController.getPaymentPage);
    //Web của ta bđau = '/', truyền router vào
    return app.use('/', router);
}

//module.export = initWebRoute;
export default initUserRoute;

