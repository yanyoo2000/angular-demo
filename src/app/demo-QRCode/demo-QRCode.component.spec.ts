/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoQRCodeComponent } from './demo-QRCode.component';

describe('DemoQRCodeComponent', () => {
  let component: DemoQRCodeComponent;
  let fixture: ComponentFixture<DemoQRCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoQRCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoQRCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
