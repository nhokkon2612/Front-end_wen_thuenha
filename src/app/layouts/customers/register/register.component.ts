import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    name: [null,[Validators.required,Validators.minLength(6)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(13)]],
    confirmPassword: ['',Validators.required]
  });
  get f(){
    return this.form.controls;
  }
  submit() {
    let data = this.form.value;
    }
}
