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
    {id: 1, name: 'kiem', categoryId: 2, safeDate: '20-11-2020', quality: 5, isDelete: false},
    {id: 2, name: 'aaaa', categoryId: 2, safeDate: '23-01-2021', quality: 0, isDelete: false},
    {id: 3, name: 'cccc', categoryId: 3, safeDate: '02-12-2020', quality: 1, isDelete: true}
]
var d = new Date()
var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
// var idInput = document.getElementById("textboxid").value;
var sumQuality = 0

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

var fiterProductByIdWithES6 = (listProduct, idInput)  => { 
    return listProduct.find((listProduct) => {
        return listProduct.id === idInput
    }).name
} 
//console.log('Tên cảu Product: ' + fiterProductByIdWithES6(listPro, 2));

function fiterProductByQulity(listProduct){
    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].quality > 0) {
            return listProduct[indexProduct]
            //console.log(listProduct[indexProduct])
        }
    }
}

var fiterProductByQulityWithES6 = listProduct => { 
    return listProduct.find((listProduct) => {
        return listProduct.quality > 0
    })
}
console.log(fiterProductByQulityWithES6(listProduct));

function fiterProductBySaleDate(listProduct){
    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].safeDate >= date) {
            return listProduct[indexProduct]
            //console.log(listProduct[indexProduct])
        }
    }
}

var fiterProductBySaleDateWithES6 = listProduct => {
    listProduct.forEach(element => {
        if (element.safeDate > date){
            return element
            //console.log(element)
        }
    })
}

function totalProduct(listProduct) {
    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].quality > 0) {
            sumQuality += listProduct[indexProduct].quality
        }
    }

    return sumQuality
    //console.log(sumQuality)
}

// var totalProductWithES6 = listProduct => {
//     listProduct.reduce((accumulator, currentValue) => {
//         accumulator + currentValue
//     })
// }

var getQuality = listProduct => {
    listProduct.forEach(element => {
        return element.quality
    })
}

// console.log(totalProductWithES6(listProduct))