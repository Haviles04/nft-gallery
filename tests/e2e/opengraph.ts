import { expect, test } from '@playwright/test'

//checks collection metadata
test('should render correct twitter opengraph on collection page', async ({
  page,
}) => {
  await page.goto('/ahk/collection/165')
  await expect(page.locator('[property="og:site_name"]')).toHaveAttribute(
    'content',
    'KodaDot - Polkadot / Kusama NFT explorer',
  )
  await expect(page.locator('[property="twitter:site"]')).toHaveAttribute(
    'content',
    '@KodaDot',
  )
  await expect(page.locator('[property="twitter:card"]')).toHaveAttribute(
    'content',
    'summary_large_image',
  )
  await expect(page.locator('[property="twitter:url"]')).toHaveAttribute(
    'content',
    'http://localhost:9090/ahk/collection/165',
  )
  await expect(page.locator('[property="twitter:title"]')).toHaveAttribute(
    'content',
    'Berlin (Generative) Waifus',
  )
  await expect(
    page.locator('[property="twitter:description"]'),
  ).toHaveAttribute('content', 'Amazing collection of generative AI waifus ❤️ ')
  await expect(page.locator('[property="twitter:image"]')).toHaveAttribute(
    'content',
    'https://og-image-green-seven.vercel.app/Berlin%20(Generative)%20Waifus.jpeg?price=Items%3A1&image=https%3A%2F%2Fimage-beta.w.kodadot.xyz%2Fipfs%2Fbafybeicaq3tyi5z3uj2oqkern656y2cqnvbu6yjmzo5b23vnilndh7kezq',
  )
})

test('Search for duplicated meta tags on collection', async ({ page }) => {
  await page.goto('/ahk/collection/165')
  await expect(page.locator('[property="og:site_name"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:site"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:card"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:url"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:title"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:description"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:image"]')).toHaveCount(1)
})

//checks Item metadata
test('should render correct twitter opengraph on item page', async ({
  page,
}) => {
  const waifuDescription = `Konnichiwa! I am your sweet anime waifu character generated by artificial intelligence during Berlin Blockchain Week.
    Spring is already here and even summer is getting closer.
    Let me tell you a secret about this picture:
    This spring picture that you see is a medium-shot charcoal painting of me.
  As you can see, I have rabbit ears.
I am wearing flower t-shirt.
The nostalgic lighting gives me more positive attitude towards life.
`
  await page.goto('/ahk/gallery/165-2')
  await expect(page.getByTestId('metadata-link')).toHaveAttribute(
    'href',
    'https://image-beta.w.kodadot.xyz/ipfs/bafkreicpxyw67alyt53ql4sq5mo5vj23633igsxxyqowbui2qg4322e4wi',
  )
  await expect(page.locator('[property="og:site_name"]')).toHaveAttribute(
    'content',
    'KodaDot - Polkadot / Kusama NFT explorer',
  )
  await expect(page.locator('[property="twitter:site"]')).toHaveAttribute(
    'content',
    '@KodaDot',
  )
  await expect(page.locator('[property="twitter:card"]')).toHaveAttribute(
    'content',
    'summary_large_image',
  )
  await expect(page.locator('[property="twitter:url"]')).toHaveAttribute(
    'content',
    'http://localhost:9090/ahk/gallery/165-2',
  )
  await expect(page.locator('[property="twitter:title"]')).toHaveAttribute(
    'content',
    'Berlin summer waifu',
  )
  await expect(
    page.locator('[property="twitter:description"]'),
  ).toHaveAttribute('content', waifuDescription)
  await expect(page.locator('[property="twitter:image"]')).toHaveAttribute(
    'content',
    'https://og-image-green-seven.vercel.app/Berlin%20summer%20waifu.jpeg?image=https%3A%2F%2Fimage-beta.w.kodadot.xyz%2Fipfs%2Fbafybeifjk7i2o4xycsbg2dhiciwp4idqzarhschiuimznyrj6cb77a2pry&mime=image%2Fpng',
  )
})

test('Search for duplicated meta tags on item', async ({ page }) => {
  await page.goto('/ahk/gallery/165-2')
  await expect(page.getByTestId('metadata-link')).toHaveAttribute(
    'href',
    'https://image-beta.w.kodadot.xyz/ipfs/bafkreicpxyw67alyt53ql4sq5mo5vj23633igsxxyqowbui2qg4322e4wi',
  )
  await expect(page.locator('[property="og:site_name"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:site"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:card"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:url"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:title"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:description"]')).toHaveCount(1)
  await expect(page.locator('[property="twitter:image"]')).toHaveCount(1)
})