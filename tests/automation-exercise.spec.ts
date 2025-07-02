import { test, expect } from '@playwright/test';

// Set timeout for all tests in this file
test.setTimeout(120000); // 2 minutes

test('Login to Demo Automation Testing', async ({ page }) => {
    // Generate unique email for this test run
    const uniqueEmail = `ak47myself_${Date.now()}@gmail.com`;

    // Step 1: Open the website
    await test.step('Open automation exercise website', async () => {
        await page.goto('https://automationexercise.com/', {
            waitUntil: 'load',
            timeout: 30000
        });
        await expect(page).toHaveTitle(/Automation Exercise/, { timeout: 10000 });
    });

    // Step 2: Click on Signup / Login
    await test.step('Navigate to signup page', async () => {
        await page.getByRole('link', { name: ' Signup / Login' }).click();
    });

    // Step 3: Fill New User Signup form
    await test.step('Fill signup form', async () => {
        await page.locator('[data-qa="signup-name"]').fill('Abhishek Kumar');
        await page.locator('[data-qa="signup-email"]').fill(uniqueEmail);
        await page.locator('[data-qa="signup-button"]').click();
    });

    // Step 4: Fill detailed signup information
    await test.step('Fill detailed signup information', async () => {
        // Title selection
        await page.locator('#id_gender1').check();
        
        // Password
        await page.locator('[data-qa="password"]').fill('testpass');
        
        // Date of Birth
        await page.locator('#days').selectOption('28');
        await page.locator('#months').selectOption('8');  // August
        await page.locator('#years').selectOption('1995');
        
        // Address Information
        await page.locator('[data-qa="first_name"]').fill('Abhishek');
        await page.locator('[data-qa="last_name"]').fill('Kumar');
        await page.locator('[data-qa="company"]').fill('Abhi');
        await page.locator('[data-qa="address"]').fill('Patna Bihar');
        await page.locator('[data-qa="state"]').fill('Bihar');
        await page.locator('[data-qa="city"]').fill('Patna');
        await page.locator('[data-qa="zipcode"]').fill('800012');
        await page.locator('[data-qa="mobile_number"]').fill('8072282654');
        
        // Create Account
        await page.getByRole('button', { name: 'Create Account' }).click();
    });

    // Step 5: Verify account creation
    await test.step('Verify account creation', async () => {
        await expect(page.getByText('Account Created!')).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
    });

    // Step 6: Verify logged in state
    await test.step('Verify logged in state', async () => {
        await expect(page.getByText('Logged in as Abhishek Kumar')).toBeVisible();
    });

    // Step 7: Delete account and verify
    await test.step('Delete account and verify', async () => {
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await expect(page.getByText('Account Deleted!')).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
    });
});
