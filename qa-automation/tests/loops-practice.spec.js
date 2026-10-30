import { test } from '@playwright/test';

test('цикл for', async () => {
    for (let i = 0; i < 5; i++) {
        console.log (`Перевірка товару номер ${i + 1}`);
    } 
});

test('цикл for...of: перебір масиву товарів', async () => {
  
    const productNames = ['Phone', 'Laptop', 'Tablet', 'Watch'];
    for(const product of productNames) {
        console.log (`Додаємо в кошик: ${product}`);
    }
});

test('перевірка знижки для кожного тарифу', async () => {
    const planPrices = [199, 299, 499, 1000];

    for (const price of planPrices) {
        const discountedPrice = price * 0.9;
        console.log (`Тариф ${price} грн зі знижкою коштує ${discountedPrice} грн`);
    }
});

/* test('список товарів', async ({ page }) => {
  const products = page.locator('.product-card');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const name = await products.nth(i).textContent();
    console.log(`Знайдено товар: ${name}`);
  }
}); */

test('цикли з часом приготування', async () => {
    let coockingTime = 90;
    /* while (coockingTime >= 30){
        console.log(`Час приготування №${coockingTime} хвилин`);
        coockingTime = coockingTime - 10; 
    } */

    do {
        console.log(`Час приготування №${coockingTime} хвилин`);
        coockingTime = coockingTime - 10; 
    } while (coockingTime >= 30);
 });

test('пошук рецепта', async () => {
    const recipeNames = ['Борщ', 'Сирники', '', 'Панкейки', '', 'Рамен', 'Вареники'];
    let empty = 0;
    let wrongRecipe = 0;
    for (const name of recipeNames) {
        if (name === 'Рамен') {
            console.log(`Знайдено потрібний рецепт: ${name} — далі не шукаємо`);
            break;
        } else if (name === '') {
            empty++;
            continue; 
        } else {
            wrongRecipe++;
            console.log(`Це не той рецепт: ${name}`);
        }
    }
    console.log(`Пропущено: ${empty}`)
    console.log(`Не тих рецептів: ${wrongRecipe}`)
    console.log(`Всього ітерацій: ${empty + wrongRecipe}`)
 });