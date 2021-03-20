var Plant = /** @class */ (function () {
    function Plant() {
        // 비공개 속성 '종(Species)'
        this._species = null;
    }
    Object.defineProperty(Plant.prototype, "species", {
        // getter 함수
        get: function () {
            return this._species;
        },
        // setter 함수
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
/* 인스턴스 생성 ------------------------------------------------ */
var plant = new Plant();
console.log(plant.species); // null
plant.species = '줄기';
console.log(plant.species); // null
plant.species = '푸른 식물';
console.log(plant.species); // '푸른 식물'
