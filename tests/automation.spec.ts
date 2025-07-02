import { test, expect } from '@playwright/test';

test('automation exercise test', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
    
    // Click signup/login
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    
    // Fill signup form
    await page.getByName('name').fill('Abhishek Kumar');
    await page.getByName('email').fill(`ak47myself${Date.now()}@gmail.com`); // Use unique email
    await page.getByRole('button', { name: 'Signup' }).click();
    
    // Fill account details
    await page.getByLabel('Mr.').check();
    await page.getByName('password').fill('testpass');
    await page.selectOption('#days', '28');
    await page.selectOption('#months', '8');
    await page.selectOption('#years', '1995');
    
    // Fill address info
    await page.getByName('first_name').fill('Abhishek');
    await page.getByName('last_name').fill('Kumar');
    await page.getByName('company').fill('Abhi');
    await page.getByName('address1').fill('Patna Bihar');
    await page.getByName('state').fill('Bihar');
    await page.getByName('city').fill('Patna');
    await page.getByName('zipcode').fill('800012');
    await page.getByName('mobile_number').fill('8072282654');
    
    // Create account
    await page.getByRole('button', { name: 'Create Account' }).click();
    
    // Verify account creation
    await expect(page.getByText('Account Created!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
    
    // Verify logged in
    await expect(page.getByText('Logged in as Abhishek Kumar')).toBeVisible();
    
    // Delete account
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
});
