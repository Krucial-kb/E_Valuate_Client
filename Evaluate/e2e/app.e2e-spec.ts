import { EvaluatePage } from './app.po';

describe('evaluate App', function() {
  let page: EvaluatePage;

  beforeEach(() => {
    page = new EvaluatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
