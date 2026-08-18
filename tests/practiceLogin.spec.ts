import { test, expect } from "@playwright/test"

test ('Test Login @smaoke', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice/');
    let title:string = await page.title()
    console.log(title)
    await page.getByRole('link',{ name:'Test Login Page'}).click()
    await page.getByRole('textbox', {name: 'Username'}).fill('student')
    await page.getByRole('textbox',{name:'Password'}).fill('Password123')
    await page.getByRole('button',{name:'Submit'}).click()
    await expect(page).toHaveTitle(/Logged In Successfully/)
    await expect(page.getByRole('heading',{name:'Logged In Successfully'})).toBeVisible()
});

test("Invalid user @smoke", async ({page}) =>{
    await page.goto("https://practicetestautomation.com/practice/")
    await page.getByRole('link',{ name:'Test Login Page'}).click()
    await page.getByRole('textbox', {name: 'Username'}).fill('incorrectUser')
    await page.getByRole('textbox',{name:'Password'}).fill('Password123')
    await page.getByRole('button',{name:'Submit'}).click()
    let errorText :string =await page.locator("//div[@id='error']").innerText()
    await expect(errorText).toBe("Your username is invalid!")
});

test("Invalid password @smoke", async ({page}) =>{
    await page.goto("https://practicetestautomation.com/practice/")
    await page.getByRole('link',{ name:'Test Login Page'}).click()
    await page.getByRole('textbox', {name: 'Username'}).fill('student')
    await page.getByRole('textbox',{name:'Password'}).fill('incorrectPassword')
    await page.getByRole('button',{name:'Submit'}).click()
    let errorText :string =await page.locator("//div[@id='error']").innerText()
    await expect(errorText).toBe("Your password is invalid!")
});

