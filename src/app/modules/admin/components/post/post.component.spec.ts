import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostComponent } from './post.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../../../environments/environment';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

describe('PostComponent', () => {
  let comp: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFirestoreModule,
        FormsModule,
      ],
      declarations: [
        PostComponent,
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PostComponent);
      comp = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should create the PostComponent', () => {
    expect(comp).toBeTruthy();
  });

  it(`should have a form`, () => {
    expect(de).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    fixture.detectChanges();
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should reset the form', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      comp.resetForm();
      const title = fixture.debugElement.query(By.css('input[name="title"]')).nativeElement;
      const text = fixture.debugElement.query(By.css('input[name="text"]')).nativeElement;

      expect(title.value).toBe('');
      expect(text.value).toBe('');
    });

  });
});
