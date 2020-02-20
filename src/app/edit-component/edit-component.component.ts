import { Component, OnInit } from "@angular/core";
import { ProfileServiceService } from "../profile-service.service";
import { NgForm } from "@angular/forms";
import { UserProfile } from "../interface/user-profile";
import { Router } from '@angular/router';

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponentComponent implements OnInit {
  profile: UserProfile;
  constructor(
    private service: ProfileServiceService,
    private routerInstance: Router
  ) {}

  ngOnInit(): void {
    this.profile = this.service.getUserProfile();
  }
  update(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.routerInstance.navigate(["profile"]);
  }
}
