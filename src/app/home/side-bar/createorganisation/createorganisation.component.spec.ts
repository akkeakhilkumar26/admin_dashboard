import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorganisationComponent } from './createorganisation.component';

describe('CreateorganisationComponent', () => {
  let component: CreateorganisationComponent;
  let fixture: ComponentFixture<CreateorganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorganisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
