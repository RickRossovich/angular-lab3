import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponentComponent } from "./profile-component/profile-component.component";
import { EditComponentComponent } from "./edit-component/edit-component.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    EditComponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
