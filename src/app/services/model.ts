export class Todo {
   readonly done: boolean = false;
   readonly id: number;
   readonly title: string;
   readonly createdAt: Date;
   readonly updatedAt: Date;

   constructor(id: number, title: string, createdAt: Date, updatedAt: Date) {
      this.id = id;
      this.title = title;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
   }
}