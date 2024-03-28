export class Article{

  id: number;
  titre!: string;
  date!:Date;
  listCategories!: Array<string>;
  author!: string;
  image!:string;
  description!: string;
  content1!: string;
  content2!:string;


  constructor(id: number, titre: string, date: Date, listCategories: Array<string>, author: string, image: string, description: string, content1: string, content2: string) {
    this.id = id;
    this.titre = titre;
    this.date = date;
    this.listCategories = listCategories;
    this.author = author;
    this.image = image;
    this.description = description;
    this.content1 = content1;
    this.content2 = content2;
  }
}
