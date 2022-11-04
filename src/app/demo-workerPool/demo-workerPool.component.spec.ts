/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoWorkerPoolComponent } from './demo-workerPool.component';

describe('DemoWorkerPoolComponent', () => {
  let component: DemoWorkerPoolComponent;
  let fixture: ComponentFixture<DemoWorkerPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoWorkerPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWorkerPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
