import { NbaService } from 'src/app/services/nba.service';
import { TeamConferencePipe } from './team.conference.pipe';

describe('TeamConferencePipe', () => {
  it('create an instance', () => {
    const pipe = new TeamConferencePipe(new NbaService());
    expect(pipe).toBeTruthy();
  });
});
