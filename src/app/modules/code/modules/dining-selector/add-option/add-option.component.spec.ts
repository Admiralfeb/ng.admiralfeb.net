import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionComponent } from './add-option.component';

describe('AddOptionComponent', () => {
  let component: AddOptionComponent;
  let fixture: ComponentFixture<AddOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
