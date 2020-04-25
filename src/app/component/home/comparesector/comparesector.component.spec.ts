import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparesectorComponent } from './comparesector.component';

describe('ComparesectorComponent', () => {
  let component: ComparesectorComponent;
  let fixture: ComponentFixture<ComparesectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparesectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparesectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
