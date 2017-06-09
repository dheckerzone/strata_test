import { StrataPage } from './app.po';

describe('strata App', () => {
  let page: StrataPage;

  beforeEach(() => {
    page = new StrataPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
