import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterFooterComponent } from './after-footer.component';

describe('AfterFooterComponent', () => {
  let component: AfterFooterComponent;
  let fixture: ComponentFixture<AfterFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
