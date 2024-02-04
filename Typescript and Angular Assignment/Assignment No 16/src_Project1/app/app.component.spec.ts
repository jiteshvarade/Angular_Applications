import { TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PasswordComponent } from './password/password.component';
import { ArrayComponent } from './array/array.component';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        PasswordComponent,
        ArrayComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
