import { Injectable } from "@angular/core";
import { ISession } from "../../../index";


@Injectable()
export class VoterService {
    deleteVoter(session: ISession, username: string): void {
        session.voters = session.voters.filter(x => x !== username);
    }

    addVoter(session: ISession, username: string): void {
        session.voters.push(username);
    }

    userHasVoted(session: ISession, username: string): boolean {
        if (!session.voters) return false;
        return session.voters.some(x => x === username);
    }
}