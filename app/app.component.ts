import { Component } from "@angular/core";

@Component({
  selector: "gr-login",
  moduleId: module.id,
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login.android.css"]
})
export class AppComponent {
  email="ajaybhagatm620@gmail.com";
  submit(){
    alert("You're using: "+this.email);
  }
}