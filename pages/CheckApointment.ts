import { Page,Locator, expect } from "@playwright/test";

export class CheckApointment{

    readonly page:Page;
    readonly apointments : Locator;


    constructor(page:Page){

        this.page = page;
        this.apointments = page.getByTestId('clinic-nav-appointments');
       

    }


    async cancelApointments(){
        await this.page.goto("https://playground.qatools.dev/clinic");
        await this.apointments.click();
        await expect(this.page).toHaveURL("/clinic/appointments");

        await this.page.locator('[data-testid$="-cancel"]').first().click();
     
        
        const cancelButtonConfirm = this.page.getByText('Yes, cancel');
        await cancelButtonConfirm.click();
        
       
        await expect(this.page.locator('[data-testid$="-status"]').first()).toHaveText('✕ Cancelled');

    }







}




