export class HttpRequestService {
  private userId: number;
  private id: number;
  private title: string;
  private completed: boolean;

  constructor() {
    this.userId = 0;
    this.id = 0;
    this.title = '';
    this.completed = false;
  }

  setAll(userid: number, id: number, title: string, completed: boolean){
    this.userId = userid;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
