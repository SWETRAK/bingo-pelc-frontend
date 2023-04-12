import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpBingoPageComponent } from './bp-bingo-page.component';

describe('BpBingoPageComponent', () => {
  let component: BpBingoPageComponent;
  let fixture: ComponentFixture<BpBingoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpBingoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpBingoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
