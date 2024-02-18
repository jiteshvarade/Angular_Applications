import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.css',
  providers : [FormBuilder, Validators]
})
export class CustomerInfoComponent 
{
  constructor(public fbobj : FormBuilder)
  {

  }

  Info = this.fbobj.group(
    {
      firstname : ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+')]],
      lastname : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+')]],
      email : ['', [Validators.required]],
      phone : ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]],
      city : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+'), Validators.minLength(4)]],
      state : ['', [Validators.required]],
      zipcode : ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(5), Validators.maxLength(5)]],
      comment : ['', [Validators.required, Validators.minLength(30)]]
    }
  );
}
