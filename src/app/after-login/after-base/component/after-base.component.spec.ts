import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterBaseComponent } from './after-base.component';

describe('AfterBaseComponent', () => {
  let component: AfterBaseComponent;
  let fixture: ComponentFixture<AfterBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
