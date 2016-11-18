import { Ng2071016Page } from './app.po';

describe('ng2-071016 App', function() {
  let page: Ng2071016Page;

  beforeEach(() => {
    page = new Ng2071016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
