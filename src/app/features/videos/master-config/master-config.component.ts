import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-master-config',
  templateUrl: './master-config.component.html',
  styleUrls: ['./master-config.component.css']
})
export class MasterConfigComponent implements OnInit, OnDestroy {
  settingsForm: FormGroup;
  widthSub: Subscription;
  heightSub: Subscription;
  @Output() settingsChanged: EventEmitter<{prop: string, value: number}> = new EventEmitter();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      width: [300, [Validators.required]],
      height: [300, [Validators.required]],
    });

    this.widthSub = this.settingsForm.get('width').valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        this.settingsChanged.emit({prop: 'width', value: this.settingsForm.get('width').value}) ;
      });

    this.heightSub = this.settingsForm.get('height').valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        this.settingsChanged.emit({prop: 'height', value: this.settingsForm.get('height').value}) ;
      });
  }

  ngOnDestroy() {
    this.widthSub.unsubscribe();
    this.heightSub.unsubscribe();
  }
}
