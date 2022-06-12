describe('Homepage End-to-End Tests', () => {
  before(browser => browser.navigateTo('/'))

  it('should render Homepage', (browser) => {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Pokédex')
      .assert.textContains('h1', 'What Pokémon are you looking for?')
  })

  it('should render Navigation Card components', () => {
    // Count Navigation Card components
    expect.elements('#navigation-list a').count.toEqual(6)

    // Verifying the 1st navigation
    const firstNavigationCard = element({
      selector: '#navigation-list a',
      index: 0
    })
    expect(firstNavigationCard).text.toContain('Pokédex')

    // Verifying the 2nd navigation
    const secondNavigationCard = element({
      selector: '#navigation-list a',
      index: 1
    })
    expect(secondNavigationCard).text.toContain('Dashboard')

    // Verifying the 3rd navigation
    const thirdNavigationCard = element({
      selector: '#navigation-list a',
      index: 2
    })
    expect(thirdNavigationCard).text.toContain('Moves')

    // Verifying the 4th navigation
    const fourthNavigationCard = element({
      selector: '#navigation-list a',
      index: 3
    })
    expect(fourthNavigationCard).text.toContain('Abilities')

    // Verifying the 5th navigation
    const fifthNavigationCard = element({
      selector: '#navigation-list a',
      index: 4
    })
    expect(fifthNavigationCard).text.toContain('Items')

    // Verifying the 6th navigation
    const sixthNavigationCard = element({
      selector: '#navigation-list a',
      index: 5
    })
    expect(sixthNavigationCard).text.toContain('Type Effects')
  })

  after(browser => browser.end())
})
