import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateipodetailsComponent } from './updateipodetails.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('UpdateipodetailsComponent', () => {
  let component: UpdateipodetailsComponent;
  let fixture: ComponentFixture<UpdateipodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([]),HttpClientTestingModule],
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
