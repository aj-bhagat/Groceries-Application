import { Component } from "@angular/core";
import {User} from "./shared/user/user";

@Component({
  selector: "gr-login",
  moduleId: module.id,
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login.android.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;
  constructor(){
    this.user= new User();
  }
  submit(){
    alert("You're using: "+this.user.email);
  }

toggleDisplay(){
  this.isLoggingIn=!this.isLoggingIn;
}
}