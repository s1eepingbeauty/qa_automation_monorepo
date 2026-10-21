import { test } from '@playwright/test';

test('мутація масиву тестових email', async () => {
    const testEmails = [
        'qa@tasteorama.com',
        'guest@tasteorama.com',
        'temp@tasteorama.com',
        'new@tasteorama.com'
    ]
    console.log('масив email:', testEmails)
    testEmails.push('another@example.com')
    console.log('масив email після мутації:', testEmails)
})