import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Home/)
})

test('Deploy now link', async ({ page }) => {
  await page.goto('/')

  const firstLink = await page
    .getByRole('link', { name: 'Deploy now' })
    .nth(0)
    .getAttribute('href')

  expect(firstLink).toMatch(/vercel.com\//g)
})
