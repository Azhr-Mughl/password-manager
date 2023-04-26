import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.scss']
})
export class PasswordsListComponent implements OnInit {
  passwords: any = [];
  itemPreview = false;
  selectedItem = {};

  constructor(
  ) {
    if (localStorage.getItem("data") === null) {
      this.passwords = [];
    } else {
      this.passwords = JSON.parse(localStorage.getItem("data") || '[]');
    }
  }

  ngOnInit(): void {
  }

  deleteItem(id: any) {
    this.passwords = this.passwords.filter((record : any) => record.id !== id);
    localStorage.setItem("data", JSON.stringify(this.passwords));
  }

  viewItem (id: any) {
    this.itemPreview = true;
    this.selectedItem = this.passwords.filter((item: any) => item.id == id)[0];
  }

}
