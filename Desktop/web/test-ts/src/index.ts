class Plant {

  // 비공개 속성 '종(Species)'
  private _species:string|null = null;

  // getter 함수
  
  get species() : string {
    return this._species;
  }

  // setter 함수
  set species(value:string) {
    if ( value.length > 3 ) { this._species = value; }
  }

}


/* 인스턴스 생성 ------------------------------------------------ */

let plant = new Plant();

console.log(plant.species); // null

plant.species = '줄기';

console.log(plant.species); // null

plant.species = '푸른 식물';

console.log(plant.species); // '푸른 식물'