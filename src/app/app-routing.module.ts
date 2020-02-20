import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponentComponent } from "./profile-component/profile-component.component";
import { EditComponentComponent } from "./edit-component/edit-component.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/profile",
    pathMatch: "full"
  },

  { path: "profile", component: ProfileComponentComponent },
  { path: "edit", component: EditComponentComponent },
  { path: "**", component: ProfileComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
