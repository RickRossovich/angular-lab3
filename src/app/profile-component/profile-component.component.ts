import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../interface/user-profile";
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.css"]
})
export class ProfileComponentComponent implements OnInit {
  //like creating a new instance of a class
  profiles: UserProfile;
  constructor(private service: ProfileServiceService) {}

  ngOnInit(): void {
    this.profiles = this.service.getUserProfile();
  }
  
}
