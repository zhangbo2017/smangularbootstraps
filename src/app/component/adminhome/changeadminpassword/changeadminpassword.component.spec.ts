import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeadminpasswordComponent } from './changeadminpassword.component';

describe('ChangeadminpasswordComponent', () => {
  let component: ChangeadminpasswordComponent;
  let fixture: ComponentFixture<ChangeadminpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeadminpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeadminpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
