import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsOfRowItemsComponent } from './rows-of-row-items.component';

describe('RowsOfRowItemsComponent', () => {
  let component: RowsOfRowItemsComponent;
  let fixture: ComponentFixture<RowsOfRowItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowsOfRowItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsOfRowItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
