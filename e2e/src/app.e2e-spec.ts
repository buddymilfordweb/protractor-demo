import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('');
  });

  it('should have a title', () => {
    expect(page.getTextById('appTitle')).toEqual('ARMS basic');
  });

  it('should have a subtitle', () => {
    expect(page.getTextById('appSubtitle')).toEqual('\"as basic as it gets\"');
  });

  it('should have a button that routes to the create reservation page', () => {
    var button = page.getElementById('createReservationLink');
    expect(button.getText()).toEqual('Create Reservation');
    expect(button.getAttribute('routerLink')).toEqual('/authorization');
    button.click();
    expect(page.getUrl()).toEqual('http://localhost:4200/authorization');
  });

  it('should have a create reservation form', () => {
    page.navigateTo('/authorization');
    var lastNameInput = page.getElementById('lastName');
    lastNameInput.getTagName().then(function(response) {
      expect(response).toEqual('input')
    });
    expect(lastNameInput.getAttribute('type')).toEqual('text');

    var firstNameInput = page.getElementById('firstName');
    firstNameInput.getTagName().then(function(response) {
      expect(response).toEqual('input')
    });
    expect(firstNameInput.getAttribute('type')).toEqual('text');

    var vehicleClassSelect = page.getElementById('vehicleClass');
    vehicleClassSelect.getTagName().then(function(response) {
      expect(response).toEqual('select')
    });
  });

  it('should recieve and display input data', () => {
    page.navigateTo('/authorization');
    page.getElementById('lastName').sendKeys('O\'Reilly');
    page.getElementById('firstName').sendKeys('Ryan');
    page.getElementById('vehicleClass').$('[value=\'D\']').click();
    page.getElementById('createReservationButton').click();

    expect(page.getElementById('reservationDisplayed').isDisplayed()).toBe(true);
    expect(page.getTextById('fullNameDisplayed')).toBe('Ryan O\'Reilly');
    expect(page.getTextById('vehicleClassDisplayed')).toBe('D');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
