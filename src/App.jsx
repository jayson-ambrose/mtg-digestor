import { useState } from 'react'
import { getCards } from './helpers/apiCalls'
import Searchbar from './components/Searchbar'
import CardList from './components/CardList'
import CardListItem from './components/CardListItem'
import CardImageArea from './components/CardImageArea'
import CardImage from './components/CardImage'

function App() {

  const [cardList, setCardList] = useState([])
  const [loading, setLoading] = useState(false)
  const [targettedCard, setTargettedCard] = useState(null)

  const runSearch = async (searchCritera, query) => {
    setLoading(true)    
    getCards(searchCritera, query).then((data) => {
    setCardList(data)
    setLoading(false)
    })
  }

  const targetCard = async (card) => {
    setTargettedCard(card)
  }
  
  return (
    <>
      <h1 className='text-4xl'>MTG API DIGESTER</h1>
      <Searchbar runSearch={runSearch}/>
      <div className='flex'>
        <CardList>
          {loading ? <p>Loading...</p> : cardList?.map((card, index) => (
            <CardListItem key={index} card={card} targetCard={targetCard}/>
          ))}
        </CardList>
        <CardImageArea>
          {targettedCard ? <CardImage card={targettedCard}/>: null}
        </CardImageArea>
      </div>
    </>
  )
}

export default App
