import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonInputBoxComponent } from '../../../common-libraies/common-input-box/common-input-box.component';
import { CommonDropdownComponent } from '../../../common-libraies/common-dropdown/common-dropdown.component';
import { CommonBreadcrumbsComponent } from '../../../common-libraies/common-breadcrumbs/common-breadcrumbs.component';
import { CommonCheckboxDropdownComponent } from '../../../common-libraies/common-checkbox-dropdown/common-checkbox-dropdown.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonInputBoxComponent, ReactiveFormsModule, CommonDropdownComponent,CommonBreadcrumbsComponent,CommonCheckboxDropdownComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  [x: string]: any;
  myForm!: FormGroup;
  invalidForm!: boolean | null;
  users: any[] = [
    "Super Admin",
    "Area Admin",
    "User",
    "Coach"
  ]
  userOptions={
    title:"User Management > Add User",
    hideIcons:true
  }
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      emailId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      accessLevel: ['', Validators.required],
    });
  }

}