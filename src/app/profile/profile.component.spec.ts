/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';


import {ProfileComponent} from './profile.component';
import {ProfileService} from './profile.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of'



class MockProfileService {
  getUser() {
    return Observable.of([{
      firstName: 'Игорь',
      surname: 'Непипенко',
      photo: '',
      country: 'ua'
    }, {
      firstName: 'Вова',
      surname: 'Лобань',
      photo: '',
      country: 'ua'
    }])
  }
}
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{provide: ProfileService, useClass: MockProfileService}]
    })

    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  }));

  it('should get users', () => {
    expect(component.users.length).toBe(2)
  })
  it('should repeat', () => {
    let divs = fixture.nativeElement.querySelectorAll('div');
    expect(divs.length).toBe(2)
    expect(divs[0].textContent).toBe('Игорь Непипенко');
    expect(divs[1].textContent).toBe('Вова Лобань');
  })
});
