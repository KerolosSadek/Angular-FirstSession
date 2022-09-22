import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userName:string =""
  userEmail:string =""
model = {
  userName : "",
  userEmail : ""
}
@Output() sendingUser = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  handleSave(){
    const info = {
      userName : this.model.userName,
      userEmail : this.model.userEmail
    }
    this.sendingUser.emit(info)
  }
}
