function Product() {
    this.setInfo (_id, _name, _categoryId, _quality, _isDelete) {
        this.id = _id;
        this.name = _name;
        this.categoryId = _categoryId;
        this.quality = _quality;
        this.isDelete = _isDelete;
    }

    printInfo () {
        console.log(`ID: ${this.id} , name: ${this.name} , categoryID: ${this.categoryId} , quality: ${this.quality} , isDelete: ${this.isDelete}`)
    }

    return this;
}