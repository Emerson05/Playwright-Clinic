import { Page,Locator, expect } from "@playwright/test";

export class ProfileDocPage{

    readonly page:Page;
    readonly clinicCta : Locator;
    readonly clinicDermatology : Locator;
    readonly clincNameDoctor: Locator;


    constructor(page:Page){

        this.page = page;
        this.clinicCta = page.getByTestId('clinic-cta-find');
        this.clinicDermatology = page.getByTestId('clinic-chip-dermatology');
        this.clincNameDoctor = page.getByTestId('clinic-view-d-neha-bansal');
       

    }

     async accessDoctorSearch() {
        await this.clinicCta.click();
    }

    async selectDermatology() {
        await this.clinicDermatology.click();
    }

    async selectDoctor() {
      
        await this.clincNameDoctor.click();
    }

}