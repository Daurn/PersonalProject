import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from "../services/httpRequest.service";

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.scss']
})
export class HttprequestComponent implements OnInit {

  public request: any;
  public index: number;
  public tmp: any;

  constructor(private httpRequestService: HttpRequestService) {
    this.index = 0;
    this.request = httpRequestService;
  }

  ngOnInit(): void {
  }

  httpCall(index: number){
    fetch('https://jsonplaceholder.typicode.com/todos/' + index).then(response => response.json()).then(json => {
      this.httpRequestService.setAll(json.userId, json.id, json.title, json.completed);
    });
  }
}
