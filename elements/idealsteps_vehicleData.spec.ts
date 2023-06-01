import { expect, Locator, Page } from '@playwright/test';

export class IdealStepsVehicleData {
    readonly page: Page;
    readonly vehicleData: Locator;
    readonly counter: Locator;
    readonly make: Locator;
    readonly enginePerformance: Locator;
    readonly dateOfManufacture: Locator;
    readonly numberOfSeats: Locator;
    readonly fuelType: Locator;
    readonly payload : Locator;
    readonly totalWeight: Locator;
    readonly listPrice: Locator;
    readonly licensePlateNumber: Locator;
    readonly annualMileage: Locator;
    readonly next: Locator;

    constructor(page: Page){
        this.page = page;
        this.vehicleData = page.locator('xpath=//*[@id="idealsteps-nav"]/ul/li[1]');
        this.counter = page.locator('#entervehicledata > span.counter');
        this.make = page.locator('select#make');
        this.enginePerformance = page.locator('input#engineperformance');
        this.dateOfManufacture = page.locator('input#dateofmanufacture');
        this.numberOfSeats = page.locator('select#numberofseats');
        this.fuelType = page.locator('select#fuel');
        this.payload = page.locator('input#payload');
        this.totalWeight = page.locator('input#totalweight');
        this.listPrice = page.locator('input#listprice');
        this.licensePlateNumber = page.locator('input#licenseplatenumber');
        this.annualMileage = page.locator('input#annualmileage');
        this.next = page.locator('button#nextenterinsurantdata')
    }

    async inputData(){
        await expect(this.vehicleData).toHaveClass('idealsteps-step-active');
        await this.make.selectOption('BMW');
        await this.enginePerformance.fill('1000');
        await this.dateOfManufacture.fill('01/01/2023');
        await this.numberOfSeats.selectOption('3');
        await this.fuelType.selectOption('Electric Power');
        await this.payload.fill('1000');
        await this.totalWeight.fill('5000');
        await this.listPrice.fill('10000');
        // await this.licensePlateNumber
        await this.annualMileage.fill('30000');
    }

    async nextEnterInsurantData(){
        await expect(this.vehicleData).toHaveClass('idealsteps-step-active');
        await this.next.click();
    }
}