import { RealCommercePage } from './app.po';

describe('real-commerce App', () => {
  let page: RealCommercePage;

  beforeEach(() => {
    page = new RealCommercePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
