import { AppPage } from './app.po';
<<<<<<< HEAD
=======
import { browser, logging } from 'protractor';
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
    expect(page.getTitleText()).toEqual('practice app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125
  });
});
