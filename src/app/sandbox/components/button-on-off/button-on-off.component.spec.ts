import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOnOffComponent } from './button-on-off.component';

describe('ButtonOnOffComponent', () => {
  let component: ButtonOnOffComponent;
  let fixture: ComponentFixture<ButtonOnOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOnOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
