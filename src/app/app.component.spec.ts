import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@shared/shared-module.module';
import { AboutModule } from './modules/about/about.module';

import { AppComponent } from './app.component';
import { AppMainComponent } from './components/_main/main.component';
import { NavbarComponent} from './components/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppMainComponent,
        NavbarComponent,
      ],
      imports: [
        SharedModule,
        RouterTestingModule,
        AboutModule
      ]
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
