import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoComponent } from "../photo/photo.component";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";


@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  exports: [ PhotoDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PhotoModule,
    RouterModule
  ]
})
export class PhotoDetailsModule{ }
