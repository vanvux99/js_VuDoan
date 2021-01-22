var listData = new Product();

function listProduct(){
    
    for (let index = 0; index < 10; index++) {
        listData.setInfo((index + 1), randomName.random(10), (index + 1), 1, false);
        listData.printInfo();
    }
}

function randomName()
{
    const random = (length = 8) => {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }

    return str;
}
