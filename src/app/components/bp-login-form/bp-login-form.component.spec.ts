import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLoginFormComponent } from './bp-login-form.component';

describe('BpLoginFormComponent', () => {
  let component: BpLoginFormComponent;
  let fixture: ComponentFixture<BpLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
