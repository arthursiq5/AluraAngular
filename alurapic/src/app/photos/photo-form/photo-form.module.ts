import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PhotoFormComponent } from "./photo-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoModule } from "../photo/photo.module";
import { ImmediateClickModule } from "../../shared/directives/immediate-click/immediate-click.module";
import { AlertModule } from "../../shared/components/alert/alert.module";

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
    PhotoModule,
    ImmediateClickModule,
    AlertModule
  ]
})
export class PhotoFormModule{ }
