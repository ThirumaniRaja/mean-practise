import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private commonService: CommonService) {

  }
  addedPostList: any = [];
  // onPostAdded(post: Post){

  //   this.addedPostList.push(post);
  // }
  ngOnInit(): void {
    this.commonService.getData().subscribe(data => {
      console.log("app-com", data)
    })
  }
}
