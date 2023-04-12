import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpBingoCellComponent } from './bp-bingo-cell.component';

describe('BpBingoCellComponent', () => {
  let component: BpBingoCellComponent;
  let fixture: ComponentFixture<BpBingoCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpBingoCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpBingoCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
