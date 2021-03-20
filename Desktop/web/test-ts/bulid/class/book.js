var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.pages = 150;
        this._manufacturing_plant = '진원 컴퍼니';
        this.paper_type = '진원';
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    Book.prototype.printPages = function () {
        return this.pages + "\uD398\uC774\uC9C0";
    };
    Book.prototype.changePaperType = function (type) {
        this.paper_type = type;
    };
    Book.prototype.setManufacturingPlant = function (plant) {
        this._manufacturing_plant = plant;
    };
    Book.prototype.setPaperType = function (type) {
        this.changePaperType(type);
        console.log(this.paper_type);
    };
    Book.prototype.setPlant = function (plant) {
        // private 메서드 접근 가능
        this.setManufacturingPlant(plant);
        console.log(this._manufacturing_plant);
    };
    return Book;
}());
var pople = new Book('1', '최진원', 367);
console.log(pople.printPages());
