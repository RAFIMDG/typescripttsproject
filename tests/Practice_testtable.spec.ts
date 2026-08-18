import {test,expect} from '@playwright/test'


test('test table link @sanity', async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice/')
    await page.getByRole('link',{name:'Test Table'}).click()
    await expect(page).toHaveTitle(/Test Table/)
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-table/")
})

test('Verify Radio buttons @sanity', async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice/')
    await page.getByRole('link',{name:'Test Table'}).click()
    await expect(page).toHaveTitle(/Test Table/)
    await page.getByLabel('Any').check()
})