import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmreadingComponent } from './amreading.component';

describe('AmreadingComponent', () => {
  let component: AmreadingComponent;
  let fixture: ComponentFixture<AmreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmreadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
