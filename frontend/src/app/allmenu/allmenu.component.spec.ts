import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmenuComponent } from './allmenu.component';

describe('AllmenuComponent', () => {
  let component: AllmenuComponent;
  let fixture: ComponentFixture<AllmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
