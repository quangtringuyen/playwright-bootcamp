import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateAccountPage extends BasePage {
    readonly pageTitle: Locator;
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly countryDropdown: Locator;
    readonly cityInput: Locator;
    readonly addressInput: Locator;
    readonly stateInput: Locator;
    readonly postalCodeInput: Locator;
    readonly allowOffersCheckbox: Locator;
    readonly agreeTermsCheckbox: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        super(page);
        this.pageTitle = page.locator('h3[translate="CREATE_ACCOUNT"]');
        this.usernameInput = page.locator('input[name="usernameRegisterPage"]');
        this.emailInput = page.locator('input[name="emailRegisterPage"]');
        this.passwordInput = page.locator('input[name="passwordRegisterPage"]');
        this.confirmPasswordInput = page.locator('input[name="confirm_passwordRegisterPage"]');
        this.firstNameInput = page.locator('input[name="first_nameRegisterPage"]');
        this.lastNameInput = page.locator('input[name="last_nameRegisterPage"]');
        this.phoneNumberInput = page.locator('input[name="phone_numberRegisterPage"]');
        this.createAccountButton = page.locator('button[name="register_btn"]');
        this.countryDropdown = page.locator('select[name="countryListboxRegisterPage"]');
        this.cityInput = page.locator('input[name="cityRegisterPage"]');
        this.addressInput = page.locator('input[name="addressRegisterPage"]');
        this.stateInput = page.locator('input[name="state_/_province_/_regionRegisterPage"]');
        this.postalCodeInput = page.locator('input[name="postal_codeRegisterPage"]');
        this.allowOffersCheckbox = page.locator('input[name="allowOffersPromotion"]');
        this.agreeTermsCheckbox = page.locator('input[name="i_agree"]');
        this.registerButton = page.locator('#register_btn');
    }

    async fillCreateAccountForm(
        userName: string,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        country: string,
        city: string,
        address: string,
        state: string,
        postalCode: string,
    ) {
        await this.usernameInput.fill(userName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.phoneNumberInput.fill(phoneNumber);
        await this.countryDropdown.selectOption(country);
        await this.cityInput.fill(city);
        await this.addressInput.fill(address);
        await this.stateInput.fill(state);
        await this.postalCodeInput.fill(postalCode);
        await this.agreeTermsCheckbox.check();
        await this.registerButton.click();
    }
}
