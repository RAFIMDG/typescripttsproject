import {test,expect} from '@playwright/test'



test('Test Table @p1 check radio buttion ',async ({page})=> {
    await page.goto('https://practicetestautomation.com/practice/')
    await page.getByRole('link', {name: 'Test Table'}).click()
    // await page.getByLabel('Java').check()
    // await expect(page.getByRole('radio',{name: 'Java'})).toBeChecked()
    const radios = await page.getByRole('radio').all();
    for (let i=0;i<radios.length;i++){
        const value = await radios[i].getAttribute('value');
        console.log(value);
        await radios[i].check();
        await expect(radios[i]).toBeChecked();
    }

})

test("CheckBox Validation sanity p9", async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice/');
    await page.getByRole('link', {name: 'Test Table'}).click();
    const checkBox = await page.getByRole('checkbox');
    for(let i=0;i<await checkBox.count();i++){
        if(await checkBox.nth(i).isChecked()){
            await checkBox.nth(i).uncheck();
            console.log(
                `unchecked the checkbox ${await checkBox.nth(i).getAttribute('value')}`
            );
            await checkBox.nth(i).check();
            console.log(`checkBox Checked ${await checkBox.nth(i).getAttribute('value')}`)

        }
    }
})

test('List of hidden Dropdown Validation 1 p2',async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice/');
    await page.getByRole('link', {name: 'Test Table'}).click();
    await page.getByRole('button',{name: 'Any'}).click();
    await page.getByRole('option',{name:'5,000'}).click()
})

test('DropDowns Validation 1 p3', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice/');
    await page.getByRole('link', {name: 'Test Table'}).click();
    const dropdown = await page.locator('#sortBy');
    const options = await dropdown.locator('option')
    const count = await options.count();
    console.log(count)
    for(let i =0;i<await options.count();i++) {
        const value = await options.nth(i).getAttribute('value')
        console.log(value)
        await dropdown.selectOption({index:i});
    }
})

test('Test case 1: Language filter → Java T1 11',async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice/');
    await page.getByRole('link', {name: 'Test Table'}).click();
    const radios = await page.getByRole('radio',{name:'Java'})
    await radios.check()
    await expect(radios).toBeChecked()
})

test('Test case 2: Level filter → Beginner only 11', async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice/');
    await page.getByRole('link', {name: 'Test Table'}).click();
    const beginner = page.getByRole('checkbox', { name: 'Beginner' });
    const intermediate =  page.getByRole('checkbox',{name:' Intermediate'})
    const advanced =  page.getByRole('checkbox',{name:'  Advanced'})
    await intermediate.uncheck();
    await advanced.uncheck();
    await expect(beginner).toBeChecked({checked:true});
    await expect(intermediate).toBeChecked({checked:false})
    await expect(advanced).toBeChecked({checked:false})
})