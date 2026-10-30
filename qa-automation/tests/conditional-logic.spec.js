import { test } from '@playwright/test';

test('if/else конструкція', async () => {
    
    const USER_AGE = 18;

    if (USER_AGE === 18) {
        console.log('Вітаю з повнолітям!');
    } 
    else if (USER_AGE < 18) {
        console.log('Доступ обмежено за віком');
    } else {
        console.log('Доступ дозволено');
    }
});

test('оператори порівняння', async () => {

    console.log(18 === 18);   // true
    console.log(18 === '18'); // false
});

test('перевірка за віком і згодою', async () => {

    const USER_AGE = 18;
    const hasAgreedTerms = true;
    const isEligible = USER_AGE >=18 && hasAgreedTerms;
    //if (USER_AGE >=18 && hasAgreedTerms) {
    if (isEligible) {
        console.log ('Вітаємо з повноліттям!');
    } else {
        console.log ('Доступ заборонено!');
    }
});

/* У своєму форку напиши код, що:
зчитує textContent() цього елемента,
виводить у консоль typeof сирого значення,
конвертує в число через Number() і порівнює з очікуваним значенням через ===.
Потім навмисно зроби помилку: залиш порівняння без конвертації. Запиши, яке значення console.log покаже насправді. */

test('перевірка перетворення кількості рецептів у число', async ({ page }) => {
    await page.goto('/');

    const recipeCount = page.locator('p[class*="recipeCount"]'); // оскільки назва класу частково генерується автоматично, використаємо селектор, який шукає recipeCount у назві класу
    const rawText = await recipeCount.textContent();

    console.log('Тип сирого значення:', typeof(rawText));

    //const numericCount = Number(rawText.match(/\d+/)?.[0]); //  /\d+/ знаходить послідовність цифр у тексті. Якщо цифр немає, результатом після Number() буде NaN
    const numericCount = rawText.match(/\d+/)?.[0];

    const isEligible = numericCount === 285;

    if (isEligible) {
        console.log (numericCount, 'має тип', typeof(numericCount));
    } else {
        console.log (numericCount, 'має тип', typeof(numericCount));
    }
});

/* Усередині оголоси let recipeAuthor і по черзі присвой їй три значення — null, '' і 'Марія'. 
Для кожного виведи в консоль результат recipeAuthor || 'Автор невідомий'. 
Потім зроби те саме через повний if/else.
Запусти npx playwright test conditions-practice. 
Запиши для себе: у якому з двох варіантів легше з першого погляду зрозуміти, що станеться, якщо значення — порожній рядок, а не null? */

test('запасне значення для автора рецепта', async () => {
    //let recipeAuthor = ''; // null, '' і 'Марія'
    //console.log (recipeAuthor || 'Автор невідомий');

    const recipeAuthor = 'Марія';
    const authorName = recipeAuthor || 'Автор невідомий';

    if(authorName === null) {
        console.log (authorName);
    } else if (authorName === ''){
        console.log (authorName);
    } else {
        console.log (`Автор рецепта: ${authorName}`);
    }
})