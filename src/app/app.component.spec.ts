/* tslint:disable:no-unused-variable */

import {TestBed, async, fakeAsync, inject, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {routes} from './app.module';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileService} from './profile/profile.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

class MockProfileService{
  getUser(){
    return Observable.of([{
      firstName: 'Игорь',
      surname: 'Непипенко',
      photo: '',
      country: 'ua'
    }])
  }
}

describe('App: testing compent links', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent
      ],
      providers:[{provide:ProfileService,useClass:MockProfileService}],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    })
  })

  it('should has router links', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.nativeElement.querySelector('.home').textContent).toBe('Home');
    expect(fixture.nativeElement.querySelector('.profile').textContent).toBe('Profile');
  })

  //router.navigate(['/profile'])
  it('should be able to navigate to home using commands API', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      TestBed.createComponent(AppComponent);
      router.navigate(['/']);
      tick();
      expect(location.path()).toBe('/')
      router.navigateByUrl('/');
      tick();
      expect(location.path()).toBe('/')
    })))

  it('should be able to navigate to profile using commands API', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      TestBed.createComponent(AppComponent);
      router.navigate(['/profile']);
      tick();
      expect(location.path()).toBe('/profile')
      router.navigateByUrl('/profile');
      tick();
      expect(location.path()).toBe('/profile')
    })))
  it('should be able to redirect on default', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      TestBed.createComponent(AppComponent);
      router.navigate(['/profilesdasdasda']);
      tick();
      expect(location.path()).toBe('/')
      router.navigateByUrl('/profile/123');
      tick();
      expect(location.path()).toBe('/')
    })))

  it('should be able to navigate by link', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges()
      fixture.nativeElement.querySelector('.profile').click();
      tick()
      expect(location.path()).toBe('/profile')
      fixture.nativeElement.querySelector('.home').click();
      tick()
      expect(location.path()).toBe('/')
    })))
});
