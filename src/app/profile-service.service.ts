import { Injectable } from "@angular/core";
import { UserProfile } from "./interface/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileServiceService {
  profile: UserProfile = {
    name: "Alf - Alien Gentleman",
    contact: "dirk@kirk.com",
    bio:
      "Came to earth via space ship. Now lives in a closet, under mysterious circumtances"
  };

  constructor() {}
  getUserProfile() {
    return this.profile;
  }
  setUserProfile(newUserProfile: UserProfile) {
    this.profile = newUserProfile;
  }
}
