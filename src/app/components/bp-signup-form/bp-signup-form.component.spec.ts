import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpSignupFormComponent } from './bp-signup-form.component';

describe('BpSignupFormComponent', () => {
  let component: BpSignupFormComponent;
  let fixture: ComponentFixture<BpSignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpSignupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
