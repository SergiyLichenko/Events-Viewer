import { ISession } from '../../index';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {

    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockVoterService, mockAuthService);
    });

    describe('ogOnChanges', () => {
        it('should filter the sessions correctly', () => {
            //arrange
            component.sessions = [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' },
            ] as ISession[];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;

            //act
            component.ngOnChanges();

            //assert
            expect(component.visibleSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {
            //arrange
            component.sessions = [
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
            ] as ISession[];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;

            //act
            component.ngOnChanges();

            //assert
            expect(component.visibleSessions[0].name).toBe('session 1');
            expect(component.visibleSessions[1].name).toBe('session 2');
            expect(component.visibleSessions[2].name).toBe('session 3');
        });
    });
});
