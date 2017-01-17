import { ProjuPage } from './app.po';

describe('proju App', function() {
  let page: ProjuPage;

  beforeEach(() => {
    page = new ProjuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
