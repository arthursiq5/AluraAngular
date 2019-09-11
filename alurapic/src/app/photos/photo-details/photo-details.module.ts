import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoComponent } from "../photo/photo.component";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";


@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  exports: [ PhotoDetailsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule
  ]
})
export class PhotoDetailsModule{ }
