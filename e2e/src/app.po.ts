import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
<<<<<<< HEAD
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
=======
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125
  }
}
