import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(subroute) {
    return browser.get(browser.baseUrl + subroute) as Promise<any>;
  }

  getElementById(id: string) {
    return element(by.id(id));
  }

  getTextById(id: string) {
    return element(by.id(id)).getText() as Promise<string>;
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}
