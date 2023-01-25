import { NbaService } from 'src/app/services/nba.service';
import { GameTeamResultPipe } from './game.team.result.pipe';

describe('GameTeamResultPipe', () => {
  it('create an instance', () => {
    const pipe = new GameTeamResultPipe(new NbaService());
    expect(pipe).toBeTruthy();
  });
});
