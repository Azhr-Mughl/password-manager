import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { encode, decode } from 'js-base64';

@Component({
  selector: 'app-add-edit-password',
  templateUrl: './add-edit-password.component.html',
  styleUrls: ['./add-edit-password.component.scss']
})
export class AddEditPasswordComponent implements OnInit {
  passwords: any = [];
  password = '';

  isUpdate = false;
  updatedDataId = '';

  passwordForm = this.formBuilder.group({
    id: ['', [Validators.minLength(1), Validators.required]],
    category: ['', [Validators.minLength(1), Validators.required]],
    app: ['', [Validators.minLength(1), Validators.required]],
    userName: ['', [Validators.minLength(3), Validators.required]],
    encryptedPassword: ['', [Validators.minLength(3), Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    if (localStorage.getItem("data") === null) {
      this.passwords = [];
    } else {
      this.passwords = JSON.parse(localStorage.getItem("data") || '[]');
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('PARAM__', params);
      if (params['id'] == 'new') {
        this.setId();
      } else {
        this.isUpdate = true;
        this.updatedDataId = params['id'];

        const matchedData = this.passwords.filter((item: any) => item.id == params['id'])[0];
        if (matchedData !== undefined) {
          this.passwordForm.patchValue(matchedData);
          this.password = decode(matchedData.encryptedPassword);
        }
        console.log('Matched Data', matchedData);
      }
    });
  }

  passwordChange() {
    this.passwordForm.patchValue({
      encryptedPassword: encode(this.password)
    })
  }

  savePassword() {
    if (this.passwordForm.valid && this.isUpdate) {
      this.passwords = this.passwords.map((item: any) => {
        if (item.id == this.updatedDataId) {
          return this.passwordForm.value;
        };
        return item;
      });
      localStorage.setItem("data", JSON.stringify(this.passwords));
      this.resetForm();

    } else if (this.passwordForm.valid) {
      this.passwords.push(this.passwordForm.value);
      this.setId();
      localStorage.setItem("data", JSON.stringify(this.passwords));
      this.resetForm();
    }
  }

  setId() {
    const lastElement = this.passwords[this.passwords.length - 1];
    this.passwordForm.patchValue({
      id: (lastElement !== undefined ? lastElement.id + 1 : 1)
    })
  }

  resetForm() {
    this.passwordForm.reset();
    this.password = '';
  }

}
