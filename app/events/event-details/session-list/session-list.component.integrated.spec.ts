import { SessionListComponent } from "./session-list.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { AuthService } from "../../../user/shared/auth.service";
import { VoterService, ISession, UpvoteComponent, DurationPipe } from "../../index";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CollapsibleWellComponent } from "../../../common/collapsible-well/collapsible-well.component";

describe("SessionListComponent", () => {

    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let nativeElement: HTMLElement;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {
                userName: "Sergiy"
            }
        };
        let mockVoterService = {
            userHasVoted(session: ISession, userName: string): boolean {
                return true;
            }
        };

        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            declarations: [SessionListComponent,
                DurationPipe],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        nativeElement = fixture.nativeElement;
    });

    describe("initial display", () => {

        it("should have the correct session title", () => {
            //arrange
            component.sessions = <ISession[]>[{
                id: 3,
                name: "Sergiy's session",
                presenter: "Sergiy Lichenko",
                duration: 1,
                level: "advanced",
                abstract: "abstract",
                voters: ["John", "Sergiy"]
            }];
            component.filterBy = "all";
            component.eventId = 4;

            //act
            component.ngOnChanges();
            fixture.detectChanges();

            //assert
            expect(nativeElement.querySelector("[well-title]").textContent)
                .toContain("Sergiy's session");
        });
    });
});