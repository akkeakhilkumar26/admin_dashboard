import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalorgComponent } from './internalorg.component';

describe('InternalorgComponent', () => {
  let component: InternalorgComponent;
  let fixture: ComponentFixture<InternalorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
