import { test } from '@playwright/test';

/*test('мутація масиву тестових email', async () => {
    const testEmails = [
        'qa@tasteorama.com',
        'guest@tasteorama.com',
        'temp@tasteorama.com',
        'new@tasteorama.com'
    ]

    console.log('масив email:', testEmails)
    testEmails.push('another@example.com')
    console.log('масив email після мутації:', testEmails)
})*/

/*test('підрахунок видимих рецептів через var', async () => {
  const cards = [false, false, true, false];
  let visibleCount = 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i]) {
      var lastVisibleIndex = i; // ВИТІК: var не обмежується блоком if або for
      visibleCount++;
    }
  }

  console.log('Кількість видимих карток:', visibleCount);
  console.log('Останній видимий індекс:', lastVisibleIndex); // Доступний поза блоком!
});

test('підрахунок видимих рецептів через let', async () => {
  const cards = [false, false, true, false];
  let visibleCount = 0;
  let lastVisibleIndex = null; // Оголошуємо до циклу

  for (let i = 0; i < cards.length; i++) {
    if (cards[i]) {
      lastVisibleIndex = i;
      visibleCount++;
    }
  }

  console.log('Кількість видимих карток:', visibleCount);
  console.log('Останній видимий індекс:', lastVisibleIndex);
});*/

test('перевірка перетворення кількості рецептів у число', async ({ page }) => {
  await page.goto('/');

  const recipeCount = page.locator('p[class*="recipeCount"]'); // оскільки назва класу частково генерується автоматично, використаємо селектор, який шукає recipeCount у назві класу

  const rawText = await recipeCount.textContent();
  const numericCount = Number(rawText);
  // як правильно отримати число 285?
  //const numericCount = Number(rawText.match(/\d+/)?.[0]); //  /\d+/ знаходить послідовність цифр у тексті. Якщо цифр немає, результатом після Number() буде NaN

  console.log('Сирий текст:', rawText);
  console.log('Тип після конвертації:', typeof numericCount);
  console.log('Чи є результат NaN:', Number.isNaN(numericCount));
});