import { PureluckesportsPage } from './app.po';

describe('pureluckesports App', function() {
  let page: PureluckesportsPage;

  beforeEach(() => {
    page = new PureluckesportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
