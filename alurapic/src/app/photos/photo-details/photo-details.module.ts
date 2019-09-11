import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoDetailsComponent } from "./photo-details.component";
import { FormsModule } from "@angular/forms";
import { PhotoModule } from "../photo/photo.module";
import { PhotoComponent } from "../photo/photo.component";


@NgModule({
  declarations: [ PhotoDetailsComponent ],
  exports: [ PhotoDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PhotoModule
  ]
})
export class PhotoDetailsModule{ }
