import { RoastTimerPage } from './app.po';

describe('roast-timer App', function() {
  let page: RoastTimerPage;

  beforeEach(() => {
    page = new RoastTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
