import { Component, EventEmitter, Output,OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 userName: string = '';
 @Output() login = new EventEmitter<string>();
 @ViewChild('userName', {static:true}) loginUsername : ElementRef;
 
 constructor() { }

 ngOnInit() {
    console.log(this.loginUsername.nativeElement.value+'from ngOnInit');
 }

 submit(userName)
 {
// console.log(userName.value);
 //console.log(this.userName)
//  this.login.emit(this.userName);
//this.login.emit(userName.value);
console.log(this.loginUsername.nativeElement.value);
this.login.emit(this.loginUsername.nativeElement.value);
 }

}