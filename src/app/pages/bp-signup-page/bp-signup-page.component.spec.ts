import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpSignupPageComponent } from './bp-signup-page.component';

describe('BpSignupPageComponent', () => {
  let component: BpSignupPageComponent;
  let fixture: ComponentFixture<BpSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpSignupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
