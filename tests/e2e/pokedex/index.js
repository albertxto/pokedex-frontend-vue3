describe('Pokedex List End-to-End Tests', () => {
  before(browser => browser.navigateTo('/pokedex'))

  it('should render Pokedex List page', (browser) => {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Pokédex List')
      .assert.textContains('h1', 'Pokédex')
  })

  it('should render Pokedex Card components', () => {
    // Count Pokedex Card components
    expect.elements('#pokedex-list a').count.toEqual(200)

    // Verifying the 1st Pokemon
    const firstPokedexCard = element({
      selector: '#pokedex-list a',
      index: 0
    })
    expect(firstPokedexCard).text.toContain('#0001')

    // Verifying the 200th Pokemon
    const lastPokedexCard = element({
      selector: '#pokedex-list a',
      index: 199
    })
    expect(lastPokedexCard).text.toContain('#0200')
  })

  it('should load more Pokemon', (browser) => {
    // Move to load more component
    browser.moveToElement('#load-more', 10, 10)

    // Count Pokedex Card components
    expect.elements('#pokedex-list a').count.toEqual(400)

    // Verifying the 100th Pokemon
    const lastPokedexCard = element({
      selector: '#pokedex-list a',
      index: 399
    })
    expect(lastPokedexCard).text.toContain('#0400')
  })

  it('should navigate to Pokedex Info', (browser) => {
    // Get first Pokedex Card
    const firstPokedexCard = element({
      selector: '#pokedex-list a',
      index: 0
    })

    // Click the Pokedex Card and navigate to Pokedex Info
    browser
      .click(firstPokedexCard)
      .assert.titleContains('Bulbasaur - Pokédex')
  })

  after(browser => browser.end())
})
