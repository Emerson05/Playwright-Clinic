import { Page,Locator, expect } from "@playwright/test";

export class HomePage{
    readonly page:Page;
    readonly clinickAppLink : Locator;

    constructor(page:Page){
        this.page = page;
        this.clinickAppLink = page.getByRole('link' , {name: 'open the clinic app'})
    }

    async openClinicApp(){
        await this.clinickAppLink.click();
    }

    async expectClinicRedirect(){
         await expect(this.page).toHaveURL(/clinic/);
    }
}
