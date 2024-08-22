import { useState } from 'react'
import { getCards } from './helpers/apiCalls'
import Searchbar from './components/Searchbar'
import CardList from './components/CardList'
import CardListItem from './components/CardListItem'

function App() {

  const [cardList, setCardList] = useState([])
  const [loading, setLoading] = useState(false)

  const runSearch = async (searchCritera, query) => {
    setLoading(true)    
    getCards(searchCritera, query).then((data) => {
    setCardList(data)
    setLoading(false)
    })
  }
  
  return (
    <>
      <h1 className='font-2xl'>MTG API DIGESTER</h1>
      <Searchbar runSearch={runSearch}/>
      <CardList>
        {loading ? <p>Loading...</p> : cardList?.map((card, index) => (
          <CardListItem key={index} card={card} />
        ))}
      </CardList>
    </>
  )
}

export default App
