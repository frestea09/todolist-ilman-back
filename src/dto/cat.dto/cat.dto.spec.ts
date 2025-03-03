import { CatDto } from './cat.dto';

describe('CatDto', () => {
  it('should be defined', () => {
    expect(new CatDto()).toBeDefined();
  });
});
