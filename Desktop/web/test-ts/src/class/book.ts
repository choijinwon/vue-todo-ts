class Book {
    public title:string;
    public author:string;
    public pages:number =150;
    private _manufacturing_plant:string = '진원 컴퍼니';
    protected paper_type:string='진원';
  
    constructor(title:string,author:string,pages:number){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
  
    public printPages(): string {
      return `${this.pages}페이지`;
    }
  
    protected changePaperType(type:string): void {
      this.paper_type = type;
    }
  
    private setManufacturingPlant(plant:string):void{
      this._manufacturing_plant = plant;
    }
  
    public setPaperType(type:string):void{
      this.changePaperType(type);
      console.log(this.paper_type);
    }
  
    public setPlant(plant:string):void {
      // private 메서드 접근 가능
      this.setManufacturingPlant(plant);
      console.log(this._manufacturing_plant);
    }
  }
  
  
  let pople = new Book('1','최진원',367);
  
  
  
  console.log(pople.printPages());
  