const queryDB = require('db');
class product {
    constructor(name ,description,price,image,video){
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.video = video;
    }
}

module.exports = product;