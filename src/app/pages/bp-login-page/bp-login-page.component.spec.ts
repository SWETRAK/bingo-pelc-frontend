import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLoginPageComponent } from './bp-login-page.component';

describe('BpLoginPageComponent', () => {
  let component: BpLoginPageComponent;
  let fixture: ComponentFixture<BpLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
