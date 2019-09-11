import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit{

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ){ }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }
}