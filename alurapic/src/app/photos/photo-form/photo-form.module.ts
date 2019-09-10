import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PhotoFormComponent } from "./photo-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoModule } from "../photo/photo.module";

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    PhotoModule
  ]
})
export class PhotoFormModule{ }
