import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLogoutComponent } from './bp-logout.component';

describe('BpLogoutComponent', () => {
  let component: BpLogoutComponent;
  let fixture: ComponentFixture<BpLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
