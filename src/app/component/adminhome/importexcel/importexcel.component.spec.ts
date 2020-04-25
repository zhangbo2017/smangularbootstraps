import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportexcelComponent } from './importexcel.component';

describe('ImportexcelComponent', () => {
  let component: ImportexcelComponent;
  let fixture: ComponentFixture<ImportexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
