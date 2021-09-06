import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedFiltersComponent } from './detailed-filters.component';

describe('DetailedFiltersComponent', () => {
  let component: DetailedFiltersComponent;
  let fixture: ComponentFixture<DetailedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
