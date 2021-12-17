export class TodoService {
  todo = [
    'Devoir d\'anglais Lundi',
    'Réunion projet pro Mardi 14h'
  ];

  addOne(content: string){
    this.todo.push(content);
  }

  deleteOne(index: number){
    this.todo.splice(index, 1);
  }

  deleteAll(){
    this.todo.splice(0,this.todo.length);
  }
}
