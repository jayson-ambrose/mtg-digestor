import { useState } from 'react'
import Searchbar from './components/Searchbar'
import CardList from './components/CardList'
import CardListItem from './components/CardListItem'

function App() {

  const [cardList, setCardList] = useState([])
  const [loading, setLoading] = useState(false)

  const getCards = async () => {
    setLoading(true)
    const response = await fetch('https://api.magicthegathering.io/v1/cards')
    const data = await response.json()
    setCardList(data.cards)
    setLoading(false)
  }
  
  return (
    <>
      <h1 className='font-2xl'>MTG API DIGESTER</h1>
      <Searchbar getCards={getCards}/>
      <CardList>
        {loading ? <p>Loading...</p> : cardList.map((card, index) => (
          <CardListItem key={index} card={card} />
        ))}
      </CardList>
    </>
  )
}

export default App
