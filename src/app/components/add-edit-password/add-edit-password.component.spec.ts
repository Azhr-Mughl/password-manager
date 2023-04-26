import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPasswordComponent } from './add-edit-password.component';

describe('AddEditPasswordComponent', () => {
  let component: AddEditPasswordComponent;
  let fixture: ComponentFixture<AddEditPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
