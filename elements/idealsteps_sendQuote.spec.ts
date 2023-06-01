import { expect, Locator, Page } from '@playwright/test';

export class IdealStepsSendQuote{
    readonly page: Page;
    readonly sentQuote: Locator;
    readonly counter: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly comments : Locator;
    readonly send: Locator;
    readonly prev: Locator;

    constructor(page: Page){
        this.page = page;
        this.sentQuote = page.locator('xpath=//*[@id="idealsteps-nav"]/ul/li[5]');
        this.counter = page.locator('xpath=//*[@id="sendquote"]/span');
        this.email = page.locator('input#email');
        this.phone = page.locator('input#phone');
        this.username = page.locator('input#username');
        this.password = page.locator('input#password');
        this.confirmPassword = page.locator('input#confirmpassword');
        this.comments = page.locator('textarea#Comments');
        this.send = page.locator('button#sendemail');
        this.prev = page.locator('button#prevselectpriceoption');
    }

    async inputData(){
        await expect(this.sentQuote).toHaveClass('idealsteps-step-active');
        await this.email.fill('nguyentieuat@gmail.com');
        await this.phone.fill('0865361943');
        await this.username.fill('nguyentieuat');
        await this.password.fill('Luannt19@2023');
        await this.confirmPassword.fill('Luannt19@2023');
        // await this.comments.fill('comment');
    }

}