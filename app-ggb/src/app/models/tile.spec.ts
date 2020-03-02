import { Tile } from './tile';

describe('Tile', () => {
  it('should create an instance', () => {
    expect(Tile.getDefaultTile()).toBeTruthy();
  });
});
