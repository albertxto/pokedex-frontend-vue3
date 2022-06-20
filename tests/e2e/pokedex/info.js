describe('Pokedex Info End-to-End Tests', () => {
  before(browser => browser.navigateTo('/pokedex/1'))

  it('should render Pokedex Info page', (browser) => {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Bulbasaur - Pokédex')
      .assert.textContains('h1', 'Bulbasaur')
  })

  // Using element() global utility to init elements before tests and use them later
  const aboutTab = element({
    selector: '#pokedex-slider-tabs li',
    index: 0
  })
  const baseStatsTab = element({
    selector: '#pokedex-slider-tabs li',
    index: 1
  })
  const evolutionTab = element({
    selector: '#pokedex-slider-tabs li',
    index: 2
  })
  const movesTab = element({
    selector: '#pokedex-slider-tabs li',
    index: 3
  })

  it('should render Pokedex Slider component', () => {
    // Count Pokedex Card components
    expect.elements('#pokedex-slider-tabs li').count.toEqual(4)

    // Verifying the 1st tab
    expect(aboutTab).text.toContain('About')

    // Verifying the 2nd tab
    expect(baseStatsTab).text.toContain('Base Stats')

    // Verifying the 3rd tab
    expect(evolutionTab).text.toContain('Evolution')

    // Verifying the 4th tab
    expect(movesTab).text.toContain('Moves')
  })

  it('should render Pokedex About components', () => {
    // Pokemon About component
    expect.element('#pokemon-about').text.toContain('A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.')

    // Pokemon Measurement component
    expect.element('#pokemon-measurement').text.toContain('Height')
    expect.element('#pokemon-measurement').text.toContain('Weight')

    // Pokemon Breeding component
    expect.element('#pokemon-breeding').text.toContain('Breeding')

    // Pokemon Training component
    expect.element('#pokemon-training').text.toContain('Training')
  })

  it('should render Pokedex Base Stats components', (browser) => {
    browser.click(baseStatsTab)

    // Verifying the 1st base stat
    expect.element('#base-stat-hp').text.toContain('HP')

    // Verifying the 2nd base stat
    expect.element('#base-stat-attack').text.toContain('Attack')

    // Verifying the 3rd base stat
    expect.element('#base-stat-defense').text.toContain('Defense')

    // Verifying the 4th base stat
    expect.element('#base-stat-special-attack').text.toContain('Sp. Atk')

    // Verifying the 5th base stat
    expect.element('#base-stat-special-defense').text.toContain('Sp. Def')

    // Verifying the 6th base stat
    expect.element('#base-stat-speed').text.toContain('Speed')
  })

  it('should render Pokemon Evolution components', (browser) => {
    browser.click(evolutionTab)

    // Verifying the 1st evolution
    const bulbasaur = element({
      selector: 'div.capitalize.cursor-pointer',
      index: 0
    })
    expect(bulbasaur).text.toContain('Bulbasaur')

    // Verifying the 2nd evolution
    const ivysaur = element({
      selector: 'div.capitalize.cursor-pointer',
      index: 1
    })
    expect(ivysaur).text.toContain('Ivysaur')

    // Verifying the 3rd evolution
    const venusaur = element({
      selector: 'div.capitalize.cursor-pointer',
      index: 3
    })
    expect(venusaur).text.toContain('Venusaur')
  })

  it('should change to next Pokemon', (browser) => {
    browser
      .dragAndDrop('#pokemon-1', { x: -100, y: 100 })
      .assert.titleContains('Ivysaur - Pokédex')
      .assert.textContains('h1', 'Ivysaur')
      .dragAndDrop('#pokemon-2', { x: -100, y: 100 })
      .assert.titleContains('Venusaur - Pokédex')
      .assert.textContains('h1', 'Venusaur')
  })

  after(browser => browser.end())
})
