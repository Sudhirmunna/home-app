import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'home-app';
  message;
  @Output() changeUrl = new EventEmitter<any>();

  ngOnInit() {
    const temp = JSON.parse(window.localStorage.getItem('profile'));
    if (temp) {
      this.message = temp.userName;
    }
  }
  onClick(event) {
    console.log('click ', event);
    this.changeUrl.emit(event);
  }
}
