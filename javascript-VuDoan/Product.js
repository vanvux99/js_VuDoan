function Product() {

    this.id;
    this.name;
    this.categoryId;
    this.saleDate;
    this.quality;
    this.isDelete;

    this.setInfo = function(id, name, categoryId, saleDate, quality, isDelete) {
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
    { id: 1, name: 'kiem', categoryId: 2, saleDate: '20-11-2020', quality: 5, isDelete: false },
    { id: 2, name: 'aaaa', categoryId: 2, saleDate: '29-01-2021', quality: 1, isDelete: false },
    { id: 3, name: 'cccc', categoryId: 3, saleDate: '02-12-2020', quality: 1, isDelete: true },
    { id: 4, name: 'number 4', categoryId: 1, saleDate: '28-01-2021', quality: 1, isDelete: true }
]
const d = new Date()
const DATE = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
// var idInput = document.getElementById("textboxid").value;
var sumQuality = 0
var listQuality = []
const getQuality = listProduct => {
    listProduct.forEach(element => {
        listQuality.push(element.quality)
    })

    return listQuality
}
var printListProduct = []
var test = list => {
    if (list.length > 0) {
        return list.forEach(element => {
            console.log(element);
        });
    }

}
const cleanArray = list => {
    list.splice(0, (list - 1))
}

//#region listProduct() 
function listProduct() {
    var prod = new Product();
    for (let index = 0; index < 10; index++) {
        prod.setInfo((index + 1), random(10), (index + 1), d, 1, false);
        console.log(prod)
    }
}
//#endregion

//#region fiterProductById(listProduct, idInput)
function fiterProductById(listProduct, idInput) {
    if (idInput != null) {
        for (let index = 0; index < listProduct.length; index++) {
            if (listProduct[index].id == idInput) {
                return listProduct[index].name
            }
        }
    }
}
//console.log(fiterProductById(listPro, 2)); 
// result = aaa

//#endregion

//#region fiterProductByIdWithES6 (listProduct, idInput)
const fiterProductByIdWithES6 = (listProduct, idInput) => (listProduct.find(listProduct => (listProduct.id === idInput)).name)
    //console.log('Tên của Product: ' + fiterProductByIdWithES6(listPro, 2));
    // result = aaa

//#endregion

//#region fiterProductByQulity(listProduct)
function fiterProductByQulity(listProduct) {
    cleanArray(printListProduct)

    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].quality > 0) {
            printListProduct.push(listProduct[indexProduct])
        }
    }

    return printListProduct
}
//console.log(test(fiterProductByQulity(listPro)));
//result object id = 1, 2, 3

//#endregion

//#region fiterProductByQulityWithES6(listProduct)
const fiterProductByQulityWithES6 = listProduct => {
        cleanArray(printListProduct)

        listProduct.forEach(element => {
            if (element.quality > 0) {
                printListProduct.push(element)
            }
        })

        return printListProduct
    }
    //console.log(test(fiterProductByQulityWithES6(listPro)));
    //result object id = 1, 2, 3

//#endregion

//#region fiterProductBySaleDate(listProduct) 
function fiterProductBySaleDate(listProduct) {
    let listProductBySaleDate = []

    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (Date.parse(listProduct[indexProduct].saleDate) > Date.parse(DATE)) {
            listProductBySaleDate.push(listProduct[indexProduct])
        }
    }

    return listProductBySaleDate
}
//console.log("ghịyhkhik", fiterProductBySaleDate(listPro));
// result object id = 2 and id = 4

//#endregion

//#region fiterProductBySaleDateWithES6(listProduct)
var fiterProductBySaleDateWithES6 = listProduct => {
        let listProductBySaleDateWithES6 = []

        listProduct.forEach(element => {
            if (element.saleDate >= DATE) {
                listProductBySaleDateWithES6.push(element)
            }
        })

        return listProductBySaleDateWithES6
    }
    //console.log(fiterProductBySaleDateWithES6(listPro));
    // result object id = 2 and id = 4

//#endregion

//#region totalProduct(listProduct)
function totalProduct(listProduct) {
    for (let indexProduct = 0; indexProduct < listProduct.length; indexProduct++) {
        if (listProduct[indexProduct].quality > 0) {
            sumQuality += listProduct[indexProduct].quality
        }
    }

    return sumQuality
}
//console.log(totalProduct(listPro));
// result = 6

//#endregion

// review again
//#region totalProductWithES6(listProduct)
const totalProductWithES6 = listProduct => {
        return getQuality(listPro).reduce(((sum, number) => sum + number), 0)
    }
    //console.log(totalProductWithES6(listPro));
    // return result 8

//#endregion

//#region isHaveProductInCategory(listProduct, categoryId)
function isHaveProductInCategory(listProduct, categoryId) {
    var bool = false

    for (let indexCategory = 0; indexCategory < listProduct.length; indexCategory++) {
        if (listProduct[indexCategory].categoryId === categoryId)
            return true
    }

    return bool
}
//console.log(isHaveProductInCategory(listPro, 4));
// result false

//#endregion

// error
//#region  isHaveProductInCategoryWithES6(listProduct, categoryID)
const isHaveProductInCategoryWithES6 = (listProduct, categoryID) => {
        let bool = false

        listProduct.forEach(element => {
            if (element.categoryId === categoryID)
                return true
        })

        return bool
    }
    //console.log(isHaveProductInCategoryWithES6(listPro, 2));
    // error
    //#endregion

//#region fiterProductBySaleDate(listProduct)
function fiterProductBySaleDate(listProduct) {
    let listProductBySaleDate = []

    for (let indexArray = 0; indexArray < listPro.length; indexArray++) {
        if (listProduct[indexArray].saleDate >= DATE && listProduct[indexArray].quality > 0) {
            listProductBySaleDate.push(listProduct[indexArray])
        }
    }

    return listProductBySaleDate
}
//console.log(fiterProductBySaleDate(listPro));
// return result object with id = 2 and id = 4

//#endregion

//#region  fiterProductBySaleDateES6(listProduct)
const fiterProductBySaleDateES6 = listProduct => {
        let listProductBySaleDate = []

        listProduct.forEach(element => {
            if (element.saleDate >= DATE && element.quality > 0) {
                listProductBySaleDate.push(element)
            }
        })

        return listProductBySaleDate
    }
    //console.log(fiterProductBySaleDateES6(listPro));
    // return result object with = 2 and id = 4

//#endregion