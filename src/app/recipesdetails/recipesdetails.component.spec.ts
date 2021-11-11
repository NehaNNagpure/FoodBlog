import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesdetailsComponent } from './recipesdetails.component';

describe('RecipesdetailsComponent', () => {
  let component: RecipesdetailsComponent;
  let fixture: ComponentFixture<RecipesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
