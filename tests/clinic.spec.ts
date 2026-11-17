import {test,expect,Page} from "@playwright/test";
import { loginClinic } from "../helpers/auth";
import { HomePage } from "../pages/HomePage";
import { ProfileDocPage } from "../pages/ProfileDocPage";
import { DoctorApointment } from "../pages/DocApoitment";
import { CheckApointment } from "../pages/CheckApointment";

test.beforeEach(async({page})=>{
    await loginClinic(page);
});


test.describe("Verificando fluxo completo de agendamento e cancelamento de consultas", () => {
    
    test("verificando o link de redirecionamento para a clinica está funcionando", async ({ page }) => {

        const homePage = new HomePage(page);
        await homePage.openClinicApp();
        await homePage.expectClinicRedirect();
       
    });

    test("Verificando perfil do Médico",async({page})=>{

        const profileDocPage = new ProfileDocPage(page);
        await page.goto("/clinic");
        await profileDocPage.accessDoctorSearch();
        await profileDocPage.selectDermatology();
        await profileDocPage.selectDoctor();
       

    })

    test("Verificando funcionalidades de consulta end to end", async({page})=>{

        const profileDocPage = new ProfileDocPage(page);
        await page.goto("/clinic");
        await profileDocPage.accessDoctorSearch();
        await profileDocPage.selectDermatology();
        await profileDocPage.selectDoctor();
        
        const doctorApointment = new DoctorApointment(page);
        await doctorApointment.DoctorConsult();

        const checkApointment = new CheckApointment(page);
        await checkApointment.cancelApointments();

    })

});