import { CREDENTIALS } from './constantes';
import { Page } from '@playwright/test';



export async function loginClinic(
  page: Page,
  user = CREDENTIALS.clinicDemo
) {
  await page.goto('/login');

  const SkipTourButton = page.getByText('Skip tour');
  await SkipTourButton.click();


  await page.fill('#login-email', user.email);
  await page.fill('#login-password', user.password);

  await page.getByTestId('login-remember').click();
  

  await page.getByRole('button', { name: 'Sign in'}).click()
    
}