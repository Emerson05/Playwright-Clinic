import { Page,Locator, expect } from "@playwright/test";

export class DoctorApointment{

    readonly page:Page;
    readonly apointmentDay : Locator;
    readonly clinicApointmentHours : Locator;
    readonly clincApoitmentPhone: Locator;
    readonly clinicbookApointment: Locator;
    readonly clincApoitmentName: Locator;

    constructor(page:Page){

        this.page = page;
        this.apointmentDay = page.getByTestId('clinic-day-2026-11-21');
        this.clinicApointmentHours = page.getByTestId('clinic-slot-11:00');
        this.clincApoitmentPhone = page.getByTestId('clinic-input-phone');
        this.clinicbookApointment = page.getByTestId('clinic-detail-book')
        this.clincApoitmentName = page.getByTestId('clinic-input-name');

    }

      async DoctorConsult() {

        await this.clinicbookApointment.click();
        await this.apointmentDay.click();
        await this.clinicApointmentHours.click();
        await this.clincApoitmentName.fill('Jorginho da Silva');
        await this.clincApoitmentPhone.fill('0245290872');
        await this.page.getByTestId('clinic-input-reason').click();

        await this.page.selectOption('[data-testid="clinic-input-reason"]', 'Follow-up visit');

        await this.page.getByTestId('clinic-input-notes').fill('Passou Dipirona');
        
        await this.page.getByTestId('clinic-confirm-booking').click();
            
        await expect(this.page).toHaveURL("/clinic/book/d-neha-bansal");

    }


}
    



           
