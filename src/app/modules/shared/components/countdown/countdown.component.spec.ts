import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountdownComponent } from './countdown.component';

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;
  const date = 'October 7 2018';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    component.inputDate = date;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inputData should have a value', () => {
    expect(component.inputDate).toBeTruthy();
  });
});
