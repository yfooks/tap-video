import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-video-dialog',
  templateUrl: './add-video-dialog.component.html',
  styleUrls: ['./add-video-dialog.component.css']
})
export class AddVideoDialogComponent implements OnInit {
  url: string;

  constructor(
    public dialogRef: MatDialogRef<AddVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
