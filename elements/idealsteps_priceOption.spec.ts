import { expect, Locator, Page } from '@playwright/test';

export class IdealStepsPriceOption {
    readonly page: Page;
    readonly priceOption: Locator;
    readonly counter: Locator;
    readonly selectOption: Locator;
    readonly viewQuote: Locator;
    readonly downloadQuote: Locator;
    readonly next: Locator;
    readonly prev: Locator;

    constructor(page: Page){
        this.page = page;
        this.priceOption = page.locator('xpath=//*[@id="idealsteps-nav"]/ul/li[4]');
        this.counter = page.locator('xpath=//*[@id="selectpriceoption"]/span');
        this.selectOption = page.locator('#priceTable > tfoot > tr > th.group');
        this.viewQuote = page.locator('xpath=//*[@id="quote-sub-container"]/div/div[1]/div/div[2]');
        this.downloadQuote = page.locator('xpath=//*[@id="quote-sub-container"]/div/div[2]/div/div[2]');
        this.next = page.locator('button#nextsendquote');
        this.prev = page.locator('button#preventerproductdata');

    }

    async inputData(){
        await expect(this.priceOption).toHaveClass('idealsteps-step-active');
        const rndInt = Math.floor(Math.random() * 4) + 1
        await this.page.locator('xpath=//*[@id="priceTable"]/tfoot/tr/th[2]/label[' + rndInt + ']').click();
    }

    async nextEnterSentQuote(){
        await expect(this.priceOption).toHaveClass('idealsteps-step-active');
        await this.next.click();
    }

}