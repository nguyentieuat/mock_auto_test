import { expect, Locator, Page } from '@playwright/test';

export class IdealStepsProductData {
    readonly page: Page;
    readonly productData: Locator;
    readonly counter: Locator;
    readonly startDate: Locator;
    readonly insuranceSum: Locator;
    readonly damageInsurance: Locator;
    readonly optionalProducts: Locator;
    readonly next: Locator;
    readonly prev: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productData = page.locator('xpath=//*[@id="idealsteps-nav"]/ul/li[3]');
        this.counter = page.locator('xpath=//*[@id="enterproductdata"]/span');
        this.startDate = page.locator('input#startdate');
        this.insuranceSum = page.locator('select#insurancesum');
        this.damageInsurance = page.locator('select#damageinsurance');
        this.optionalProducts = page.locator('div.field.idealforms-field.idealforms-field-checkbox > p.group');
        this.next = page.locator('button#nextselectpriceoption');
        this.prev = page.locator('button#preventerinsurancedata');
    }

    async inputData(){
        await expect(this.productData).toHaveClass('idealsteps-step-active');
        await this.startDate.fill('12/31/2023');
        await this.insuranceSum.selectOption('10000000');
        await this.damageInsurance.selectOption('Full Coverage');
        await this.page.locator('xpath=//*[@id="insurance-form"]/div/section[3]/div[4]/p/label[1]').click();
        await this.page.locator('xpath=//*[@id="insurance-form"]/div/section[3]/div[4]/p/label[2]').click();
    }

    async nextEnterPriceOption(){
        await expect(this.productData).toHaveClass('idealsteps-step-active');
        await this.next.click();
    }
}