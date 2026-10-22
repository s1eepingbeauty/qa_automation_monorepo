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

test('підрахунок видимих рецептів через var', async () => {
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
});