import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.css']
})
export class BuilderFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  form!: FormGroup<any>;
  hobbies!: FormArray<any>;

  onSubmit(form: FormGroup){
    this.form.reset();
  }

  addHobby() {
    this.hobbies.controls.push(this.fb.control(''));
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.hobbies = this.fb.array([
      this.fb.control('Программирование мое хобби')
    ])
    this.form = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      hobbies: this.hobbies
    })
  }

}
