import { Selector } from 'testcafe'

fixture`Navigation Test`
  .page`http://localhost:3000`

test('Navigation through header links', async t => {
  // About page
  await t
    .click(Selector('a').withText('About'))
    .expect(Selector('h1').withText('About').exists).ok()

  // Contact page
  await t
    .click(Selector('a').withText('Contact'))
    .expect(Selector('h1').withText('Contact').exists).ok()

  // Back to home
  await t
    .click(Selector('a').withText('Home'))
    .expect(Selector('h1').withText('Tatsuya Yamashita').exists).ok()
}) 