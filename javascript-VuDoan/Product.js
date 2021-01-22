class Product {
    constructor (id, name, categoryId, quality, isDelete) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.quality = quality;
        this.isDelete = isDelete;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name = name;
    }

    getID()
    {
        return this.id;
    }

    setID(id)
    {
        this.id = id;
    }

    getCategoryId()
    {
        return this.categoryId;
    }

    setCategoryId(categoryId)
    {
        this.categoryId = categoryId;
    }

    getQuality()
    {
        return this.quality;
    }

    setQuality(name)
    {
        this.quality = quality;
    }

    getIsDelete()
    {
        return this.isDelete;
    }

    setIsDelete(isDelete)
    {
        this.isDelete = name;
    }
}