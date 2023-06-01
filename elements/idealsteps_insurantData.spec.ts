import { expect, Locator, Page } from '@playwright/test';

export class IdealStepsInsurantData {
    readonly page: Page;
    readonly insurantData: Locator;
    readonly counter: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly dateOfBirth: Locator;
    readonly gender: Locator;
    readonly streetAddress: Locator;
    readonly country: Locator;
    readonly zipCode: Locator;
    readonly city: Locator;
    readonly occupation: Locator;
    readonly hobbies: Locator;
    readonly website:Locator;
    readonly picture: Locator;
    readonly next: Locator;
    readonly prev: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.insurantData = page.locator('xpath=//*[@id="idealsteps-nav"]/ul/li[2]');
        this.counter = page.locator('xpath=//*[@id="enterinsurantdata"]/span');
        this.firstName = page.locator('input#firstname');
        this.lastName = page.locator('input#lastname');
        this.dateOfBirth = page.locator('input#birthdate');
        this.gender = page.locator('#insurance-form > div > section:nth-child(2) > div:nth-child(4) > p.group');
        this.streetAddress = page.locator('input#streetaddress');
        this.country = page.locator('select#country');
        this.zipCode = page.locator('input#zipcode');
        this.city = page.locator('input#city');
        this.occupation = page.locator('select#occupation');
        this.hobbies = page.locator('#insurance-form > div > section:nth-child(2) > div.field.idealforms-field.idealforms-field-checkbox.valid > p.group');
        this.website = page.locator('input#website');
        this.picture = page.locator('div.ideal-file-wrap');
        this.next = page.locator('button#nextenterproductdata');
        this.prev = page.locator('button#preventervehicledata');
    }

    async inputData(){
        await expect(this.insurantData).toHaveClass('idealsteps-step-active');
        await this.firstName.fill('thanhluan');
        await this.lastName.fill('nguyen');
        await this.dateOfBirth.fill('08/30/1994');
        await this.gender.locator('label:nth-child(1)').click();
        // await this.streetAddress.fill('Ha Noi');
        await this.country.selectOption('Viet Nam');
        await this.zipCode.fill('10000');
        await this.city.fill('Ha Noi');
        await this.occupation.selectOption('Employee');
        await this.page.locator('xpath=//*[@id="insurance-form"]/div/section[2]/div[10]/p/label[1]').click();
        await this.page.locator('xpath=//*[@id="insurance-form"]/div/section[2]/div[10]/p/label[4]').click();
        // await this.website
        // await this.picture
    }

    async nextEnterProductData(){
        await expect(this.insurantData).toHaveClass('idealsteps-step-active');
        await this.next.click();
    }

}