import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateipodetailsComponent } from './updateipodetails.component';

describe('UpdateipodetailsComponent', () => {
  let component: UpdateipodetailsComponent;
  let fixture: ComponentFixture<UpdateipodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateipodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateipodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
