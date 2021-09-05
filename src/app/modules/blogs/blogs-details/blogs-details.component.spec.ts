import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsDetailsComponent } from './blogs-details.component';

describe('DetailsComponent', () => {
  let component: BlogsDetailsComponent;
  let fixture: ComponentFixture<BlogsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
