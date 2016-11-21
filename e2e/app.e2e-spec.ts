import { PokerrankAngularPage } from './app.po';

describe('pokerrank-angular App', function() {
  let page: PokerrankAngularPage;

  beforeEach(() => {
    page = new PokerrankAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
