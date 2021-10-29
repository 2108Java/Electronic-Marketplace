export class Item {
   public name: string;
   public salePrice: number;
   public image: string;
   public sku: number;

   constructor(name: string, salePrice: number, image: string, sku: number) {
       this.name = name;
       this.salePrice = salePrice;
       this.image = image;
       this.sku = sku;
   }
}