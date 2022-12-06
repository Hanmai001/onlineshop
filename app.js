const express = require('express');
import initUserRoute from './routes/user';
const path = require('path');

require('dotenv').config();

const app = express();
//Lấy từ file .env
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

//Cau hinh view engine = ejs
app.set("view engine", "ejs");
//Cho thg express bt tìm file ejs ở đâu
//Tức là các file ejs phải viết trong thư mục view engine này
app.set("views", "./views");

initUserRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

