import { Observable } from 'rxjs/Observable';
import { ISession, VoterService } from '../../../index';
import '../../../../rxjs-extensions';

describe('VoterService', () => {

    let voterService: VoterService;
    let mockHttp: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);

        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            //arrange
            mockHttp.delete.and.returnValue(Observable.of(true));
            let session = {
                id: 1,
                voters: ['Sergiy', 'Lichenko'],
            };

            //act
            voterService.deleteVoter(session as ISession, 'Sergiy', 1);

            //assert
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('Lichenko');
        });

        it('should call http.delete with the right URL', () => {
            //arrange
            mockHttp.delete.and.returnValue(Observable.of(true));
            let session = {
                id: 1,
                voters: ['Sergiy', 'Lichenko'],
            };

            //act
            voterService.deleteVoter(session as ISession, 'Sergiy', 1);

            //assert
            expect(mockHttp.delete).toHaveBeenCalledWith(
                '/api/events/1/sessions/1/voters/Sergiy');
        });
    });

    describe('addVoter', () => {
        it('should call http.post with the right URL', () => {
            //arrange
            mockHttp.post.and.returnValue(Observable.of(true));
            let session = {
                id: 1,
                voters: ['Sergiy'],
            };

            //act
            voterService.addVoter(session as ISession, 'Lichenko', 2);

            //assert
            expect(mockHttp.post).toHaveBeenCalledWith(
                '/api/events/2/sessions/1/voters/Lichenko', '{}', jasmine.any(Object));
        });
    });
});
