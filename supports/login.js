import { By } from 'selenium-webdriver';
import { baseUrl, authEmail, authPassword } from "../utils/config";

export const doLogin = async (driver, { email, password }) => {
  await driver.get(baseUrl);
  await driver.findElement(By.css('.navbar .login')).click();
  await driver.findElement(By.css('#login-email')).sendKeys(email);
  await driver.findElement(By.css('#login-password')).sendKeys(password);
  await driver.findElement(By.css('#login-form .approve')).click();
  await driver.sleep(2000);
}

export const doAuthentication = async (driver) => {
  await doLogin(driver, {
    email: authEmail,
    password: authPassword,
  });
}
