import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngUsrPsswdComponent } from './chng-usr-psswd.component';

describe('ChngUsrPsswdComponent', () => {
  let component: ChngUsrPsswdComponent;
  let fixture: ComponentFixture<ChngUsrPsswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChngUsrPsswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngUsrPsswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
