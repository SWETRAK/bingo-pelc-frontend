import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpBingoRootComponent } from './bp-bingo-root.component';

describe('BpBingoRootComponent', () => {
  let component: BpBingoRootComponent;
  let fixture: ComponentFixture<BpBingoRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpBingoRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpBingoRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
