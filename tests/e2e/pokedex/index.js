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
    expect.elements('#pokedex-list a').count.toEqual(50)

    // Verifying the 1st Pokemon
    const firstNavigationCard = element({
      selector: '#pokedex-list a',
      index: 0
    })
    expect(firstNavigationCard).text.toContain('#001')

    // Verifying the 50th Pokemon
    const lastNavigationCard = element({
      selector: '#pokedex-list a',
      index: 49
    })
    expect(lastNavigationCard).text.toContain('#050')
  })

  after(browser => browser.end())
})
