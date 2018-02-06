import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'; 

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent {
readonly ROOT_URL ='https://jsonplaceholder.typicode.com'
posts: any;
  constructor(private http:HttpClient) { }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }

}
