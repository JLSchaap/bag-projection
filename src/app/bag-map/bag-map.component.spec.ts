import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagMapComponent } from './bag-map.component';

describe('BagMapComponent', () => {
  let component: BagMapComponent;
  let fixture: ComponentFixture<BagMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
