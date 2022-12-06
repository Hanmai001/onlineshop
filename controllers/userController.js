const db = require('../config/connectDb');
const datas = require('../model/productService');

let getHomepage = async (req, res) => {
    let products;
    const allProducts = await datas.getAllProduct();
    const {
        name: nameFilter,
        type: typeFilter,
        brand: brandFilter,
        manufacturer: manufacturerFilter,
        priceFrom: priceFrom,
        priceTo: priceTo,
        numBuy: numBuy,
        sortPrice: sortPrice,
        timeCreate: timeCreate,
        sort: sortFilter
    } = req.query;
    if (nameFilter || typeFilter || manufacturerFilter || brandFilter || priceFrom || priceTo || numBuy || sortPrice || timeCreate || sortFilter)
        products = await datas.getFilterProduct(req.query);
    else
        products = allProducts;
    const brands = await datas.getAllBrand();
    const manufacturers = await datas.getAllManufacturer();
    const types = await datas.getAllType();
    let random_names = [];
    let length = allProducts.length;
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * length);
        let check = true;
        for (let j = 0; j < random_names.length; j++) {
            if (random_names[j] && random_names[j] === allProducts[num].NAMEPRODUCT) {
                check = false
            }

        }
        if (check || random_names.length < 1) {
            random_names.push(allProducts[num].NAMEPRODUCT)
        }
        else i--
    }
    // console.log(random_names)
    return res.render('home.ejs', { products: products, brands: brands, types: types, manufacturers: manufacturers, names: random_names });
}
let getDetailProductPage = async (req, res) => {
    let id = req.params.id;

    const product = await datas.getDetailProduct(id);
    const relateProducts = await datas.getRelatedProducts(id);

    return res.render('product-info.ejs', { product: product, relateProducts: relateProducts });
}
let getListOrderPage = async (req, res) => {
    return res.render('list-order.ejs');
}
let getProfilePage = async (req, res) => {
    return res.render('my-profile.ejs');
}
let getUpdatePasswordPage = async (req, res) => {
    return res.render('change-password.ejs');
}
let getListOrderStatusPage = async (req, res) => {
    return res.render('status-orders.ejs');
}
let getPaymentPage = async (req, res) => {
    return res.render('payment.ejs');
}
module.exports = {
    getHomepage,
    getDetailProductPage,
    getListOrderPage,
    getProfilePage,
    getUpdatePasswordPage,
    getListOrderStatusPage,
    getPaymentPage,
}