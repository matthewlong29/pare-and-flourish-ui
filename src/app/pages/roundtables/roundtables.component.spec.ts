import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundtablesComponent } from './roundtables.component';

describe('RoundtablesComponent', () => {
  let component: RoundtablesComponent;
  let fixture: ComponentFixture<RoundtablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundtablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
