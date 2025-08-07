import { Page } from 'playwright';
import { BasePage } from './BasePage';
import { TextInput } from '../components/TextInput';
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';
import { List } from '../components/List';
import { CheckBox } from '../components/CheckBox';

export class CreateAccountPage extends BasePage {
    readonly pageTitle = new PageTitle(this.page.locator('h3[translate="CREATE_ACCOUNT"]'));
    readonly usernameInput = new TextInput(this.page.locator('input[name="usernameRegisterPage"]'));
    readonly emailInput = new TextInput(this.page.locator('input[name="emailRegisterPage"]'));
    readonly passwordInput = new TextInput(this.page.locator('input[name="passwordRegisterPage"]'));
    readonly confirmPasswordInput = new TextInput(this.page.locator('input[name="confirm_passwordRegisterPage"]'));
    readonly firstNameInput = new TextInput(this.page.locator('input[name="first_nameRegisterPage"]'));
    readonly lastNameInput = new TextInput(this.page.locator('input[name="last_nameRegisterPage"]'));
    readonly phoneNumberInput = new TextInput(this.page.locator('input[name="phone_numberRegisterPage"]'));
    readonly createAccountButton = new Button(this.page.locator('button[name="register_btn"]'));
    readonly countryDropdown = new List(this.page.locator('select[name="countryListboxRegisterPage"]'));
    readonly cityInput = new TextInput(this.page.locator('input[name="cityRegisterPage"]'));
    readonly addressInput = new TextInput(this.page.locator('input[name="addressRegisterPage"]'));
    readonly stateInput = new TextInput(this.page.locator('input[name="state_/_province_/_regionRegisterPage"]'));
    readonly postalCodeInput = new TextInput(this.page.locator('input[name="postal_codeRegisterPage"]'));
    readonly allowOffersCheckbox = new CheckBox(this.page.locator('input[name="allowOffersPromotion"]'));
    readonly agreeTermsCheckbox = new CheckBox(this.page.locator('input[name="i_agree"]'));
    readonly registerButton = new Button(this.page.locator('#register_btn'));

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
        await this.usernameInput.type(userName);
        await this.emailInput.type(email);
        await this.passwordInput.type(password);
        await this.confirmPasswordInput.type(password);
        await this.firstNameInput.type(firstName);
        await this.lastNameInput.type(lastName);
        await this.phoneNumberInput.type(phoneNumber);
        await this.countryDropdown.selectOption(country);
        await this.cityInput.fill(city);
        await this.addressInput.fill(address);
        await this.stateInput.fill(state);
        await this.postalCodeInput.fill(postalCode);
        await this.agreeTermsCheckbox.check();
        await this.registerButton.click();
    }
}
