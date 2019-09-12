import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap, tap } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhotoComment } from "../../photo/photo-comment";
import { PhotoService } from "../../photo/photo.service";
import { AlertService } from "../../../shared/components/alert/alert.service";

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['photo-comments.css']
})
export class PhotoCommentsComponent implements OnInit{

  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ){}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save(): void{
    const comment: string = this.commentForm.get('comment').value as string;

    if(!comment.trim()) // impede a inserção de comentários vazios
      return;

    this.comments$ = this.photoService
        .addComment(this.photoId, comment)
        .pipe(switchMap(() =>
          this.photoService.getComments(this.photoId)
        ))
        .pipe(tap(() => {
          this.commentForm.reset();
          this.alertService.success("Comment successfully added");
        }));
  }
}
