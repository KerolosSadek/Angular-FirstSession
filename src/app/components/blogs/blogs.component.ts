import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  firstName:string = "Kerolos"
  inputType:string = "password"
  imagePath: string = "assets/images/download.jpg"
  inputVal: string = ""
  val : number = 0
  inputData :string = ""
  constructor() { }

  ngOnInit(): void {
  }
  getNumber(){
    return 200
  }

  changeName(){
    this.firstName = "Sadek"
  }
  handleInput(event:any){
  }
  add(){
    this.val +=  1
  }
  sub(){
    this.val -= 1
  }
}

