import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([]),HttpClientTestingModule],
      declarations: [ LogoutComponent ]
    })
    .compileComponents();
  }));


const testres={status:200};
  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  // let spy : jasmine.Spy;
  it('should be component (done) ', () => {
    // expect(spy.calls.any()).toBe(true,'get called');
    expect(component).toBeTruthy();
    // spy.calls.mostRecent().returnValue.then(res =>{
    //   fixture.detectChanges();
    //   expect(component.ngOnInit()).not.toBeNull;
    // })
  });
});
