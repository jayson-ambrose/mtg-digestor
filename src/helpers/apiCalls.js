export async function getCards(searchCritera, query) {
    const response = await fetch(`https://api.scryfall.com/cards/search?q=${searchCritera}${query}`)
    const cardsObject = await response.json()
    return cardsObject.data
}