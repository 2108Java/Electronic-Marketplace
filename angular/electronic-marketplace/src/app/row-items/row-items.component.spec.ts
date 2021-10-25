import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItemsComponent } from './row-items.component';

describe('RowItemsComponent', () => {
  let component: RowItemsComponent;
  let fixture: ComponentFixture<RowItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
