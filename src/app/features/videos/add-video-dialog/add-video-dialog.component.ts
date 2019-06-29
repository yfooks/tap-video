import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-video-dialog',
  templateUrl: './add-video-dialog.component.html',
  styleUrls: ['./add-video-dialog.component.css']
})
export class AddVideoDialogComponent implements OnInit {
  url: string;
  urlForm: FormGroup;
  urlSub: Subscription;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    const reg = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
    this.urlForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(reg)]],
    });

    this.urlSub = this.urlForm.get('url').valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        this.data.url = this.urlForm.get('url').value;
      });
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
