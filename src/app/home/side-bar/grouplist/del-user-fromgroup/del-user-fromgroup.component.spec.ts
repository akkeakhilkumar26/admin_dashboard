import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelUserFromgroupComponent } from './del-user-fromgroup.component';

describe('DelUserFromgroupComponent', () => {
  let component: DelUserFromgroupComponent;
  let fixture: ComponentFixture<DelUserFromgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelUserFromgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelUserFromgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
