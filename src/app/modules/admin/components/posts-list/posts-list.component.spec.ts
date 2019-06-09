import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { PostsListComponent } from './posts-list.component';
import { PostsService } from '../../../../services/posts.service';
import { environment } from '../../../../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PostsServiceMock } from '../../../../mocks/posts.service.mock';

describe('PostsListComponent', () => {

  let comp: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFireAuthGuardModule,
        AngularFirestoreModule
      ],
      declarations: [
        PostsListComponent,
      ],
      providers: [
        {provide: PostsService, useClass: PostsServiceMock}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PostsListComponent);
      comp = fixture.componentInstance; // PostComponent test instance
    });
  }));

  it('should create the PostList', () => {
    expect(comp).toBeTruthy();
  });

  it(`should have one post`, async () => {
    fixture.detectChanges();
    comp.ngOnInit();
    fixture.whenStable().then(() => {
      expect(comp.posts.length).toEqual(1);
    });
  });

  it('html should render one user', () => {
    // const fixture = TestBed.createComponent(PostsListComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to firebase-angular!');
  });
});
