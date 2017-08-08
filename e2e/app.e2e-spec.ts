import { ServicedepsPage } from './app.po';

describe('servicedeps App', () => {
  let page: ServicedepsPage;

  beforeEach(() => {
    page = new ServicedepsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
