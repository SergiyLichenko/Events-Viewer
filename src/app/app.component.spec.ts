import { TestBed, async } from '@angular/core/testing';
import { EventsAppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from './user/shared/auth.service';

describe('EventsAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsAppComponent
      ],
      providers: [
        {provide: AuthService, useValue: {}}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
