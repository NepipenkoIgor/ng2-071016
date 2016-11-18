/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {ProfileService} from './profile.service';

describe('Service: Profile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [{provide: XHRBackend, useClass: MockBackend},
        ProfileService]
    });
  });

  it('getUsers() should return users', async(inject([XHRBackend, ProfileService],
    (mockBackend, service) => {
      let mockResponseData = [{
        firstName: 'Игорь',
        surname: 'Непипенко',
        photo: '',
        country: 'ua'
      }]
      mockBackend.connections.subscribe((connection: MockConnection) => {
        let responseOpt = new ResponseOptions({body: JSON.stringify(mockResponseData)})
        connection.mockRespond(new Response(responseOpt))
      })

      service.getUser().subscribe(users => {
        expect(users[0].firstName).toBe('Игорь');
        expect(users[0].surname).toBe('Непипенко');
        expect(users[0].photo).toBe('');
        expect(users[0].country).toBe('ua');
      })


    })));
});
