import { test } from '@playwright/test';

/* test('заглушка', async () => {
  console.log('Файл готовий до роботи');
}); */

test('тестові дані для перевірки логіну', async () => {
    const testEmails = [
        'qa@tasteorama.com',
        'guest@tasteorama',
        'temptasteorama.com',
        ''
    ];

    console.log('масив email:', testEmails);
    testEmails.push('another@example.com');
    console.log('масив email після мутації:', testEmails);
    
    let checksPassed = 0; // let дозволяє змінювати значення лічильника. const захищає змінну від перепризначення
});

test('перевірка кількості знайдених рецептів', async () => {
    const recipesFoundText = '7'; // імітація значення, зчитаного зі сторінки
    const numericCount = Number(recipesFoundText);
    const recipeAuthor = null;
    const authorName = recipeAuthor || 'Автор невідомий';

    if(numericCount === 0){
        console.log('Результатів не найдено');
    } else if (numericCount === 12) {
        console.log('Знайдено очікувану кількість рецептів');
    } else {
        console.log (`Знайдено іншу кількість рецептів: ${numericCount}`);
    }

    console.log(authorName);

});

test('перебір email через continue і break', async () => {
    const testEmails = [
        'qa@tasteorama.com',
        '',
        'guest@tasteorama',
        '',
        'temptasteorama.com',
        'another@example.com'
    ];
    let checksPassed = 1;

    for(const email of testEmails) {
        if(email === 'another@example.com')
        {
            console.log(`${checksPassed}. Email ${email} знайдено`);
            break;
        } else if(email === ''){
            console.log(`${checksPassed}. Порожнє значення`);
            checksPassed++;
            continue;
        } else {
            console.log(`${checksPassed}. Це не та адреса: ${email}`);
            checksPassed++;
            
        }
    }
});

test('зменшення часу приготування через цикли', async () => {
    let cookingTime = 90;

    while(cookingTime >= 30){
        console.log(`Час приготування: ${cookingTime} хвилин`);
        cookingTime = cookingTime - 10; // цей рядок гарантовано наближає умову до завершення
    }

    cookingTime = 90; // після виконання while cookingTime = 20, тому якщо не переприсвоїти йому значення більше за 30, do...while виведе тільки одне значення 20
    console.log('------------------');

    do{
        console.log(`Час приготування: ${cookingTime} хвилин`);
        cookingTime = cookingTime - 10;
    } while (cookingTime >= 30);

    // while спочатку перевіряє умову, а do...while спочатку виконує код
    // Тому do...while завжди виконається хоча б один раз
});