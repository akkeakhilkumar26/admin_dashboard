import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalorgComponent } from './externalorg.component';

describe('ExternalorgComponent', () => {
  let component: ExternalorgComponent;
  let fixture: ComponentFixture<ExternalorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
