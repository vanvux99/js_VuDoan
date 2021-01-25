function Product() {

    this.id;
    this.name;
    this.categoryId;
    this.saleDate;
    this.quality;
    this.isDelete;

    this.setInfo = function (id, name, categoryId, saleDate, quality, isDelete) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.saleDate = saleDate;
        this.quality = quality;
        this.isDelete = isDelete;
    }

    return this
}

const random = (length = 8) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
}
const listPro = [
    {id: 1, name: 'kiem', categoryId: 2, saleDate: '20-11-2020', quality: 5, isDelete: false},
    {id: 2, name: 'aaaa', categoryId: 2, saleDate: '27-01-2021', quality: 0, isDelete: false},
    {id: 3, name: 'cccc', categoryId: 3, saleDate: '02-12-2020', quality: 1, isDelete: true}
]
const d = new Date()
const DATE = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
// var idInput = document.getElementById("textboxid").value;
var sumQuality = 0
var listQuality = []
const getQuality = listProduct => {
    listProduct.forEach(element => {
        listQuality.push(element.quality)
    })
}

function listProduct(){
    var prod = new  Product();
    for (let index = 0; index < 10; index++) {
        prod.setInfo((index + 1),random(10), (index + 1), d, 1, false);
        console.log(prod)
    }
}

function fiterProductById(listProduct){
    if (id != null) {
        for (let index = 0; index < listProduct.length; index++) {
            if (listProduct[index].id == idInput) {
                return listProduct[index].name
                //console.log(listProduct[index].name)
            }
        }   
    } 
}

const fiterProductByIdWithES6 = (listProduct, idInput)  => (listProduct.find(listProduct => (listProduct.id === idInput)).name)
//console.log('Tên của Product: ' + fiterProductByIdWithES6(listPro, 2));

function fiterProductByQulity(listProduct){
    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].quality > 0) {
            return listProduct[indexProduct]
            //console.log(listProduct[indexProduct])
        }
    }
}
//console.log(fiterProductByQulity(listPro));

const fiterProductByQulityWithES6 = listProduct => listProduct.find( listProduct => listProduct.quality > 0)
//console.log(fiterProductByQulityWithES6(listPro));

function fiterProductBySaleDate(listProduct){
    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].saleDate >= DATE) {
            return listProduct[indexProduct]
        }
    }
}
//console.log(fiterProductBySaleDate(listPro));

var fiterProductBySaleDateWithES6 = listProduct => listProduct.find( listProduct => listProduct.saleDate >= DATE)
//console.log(fiterProductBySaleDateWithES6(listPro));

function totalProduct(listProduct) {
    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].quality > 0) {
            sumQuality += listProduct[indexProduct].quality
        }
    }

    return sumQuality
    //console.log(sumQuality)
}

const totalProductWithES6 = listProduct => {
    getQuality(listPro)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return listQuality.reduce(reducer)
}
//console.log(totalProductWithES6(listPro)    );

function isHaveProductInCategory(listProduct, categoryId) {
    for (let indexCategory = 0; indexCategory < listProduct.length; indexCategory++) {
        if (listProduct.categoryId === categoryId) 
            return true
        else 
            return false
    }
}
//console.log(isHaveProductInCategory(listPro, 2));

const isHaveProductInCategoryWithES6 = (listProduct, categoryID) => {
    listProduct.forEach(element => {
        if (element.categoryId === categoryID)
            return true
            //console.log(element.categoryId);
        else 
            return false
    })
}
//console.log(isHaveProductInCategoryWithES6(listPro, 2));

function fiterProductBySaleDate(listProduct) {
    for (let indexArray = 0; indexArray < listPro.length; indexArray++) {
        if (listProduct[indexArray].saleDate >= DATE && listProduct[indexArray].quality > 0) {
            return listProduct[indexProduct]
        }
    }
}

const fiterProductBySaleDateWithES6 = listProduct => {
    (listProduct.find(listProduct => (listProduct[indexArray].saleDate >= DATE && listProduct[indexArray].quality > 0)))
}