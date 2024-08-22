import React, { useState } from 'react'

export default function Searchbar({ runSearch }) {

  const [searchCritera, setSearchCriteria] = useState('')
  const [query, setQuery] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    console.log(searchCritera, query)
    runSearch(searchCritera, query)
  }

  const handleChangeSearchCriteria = (e) => {
    setSearchCriteria(e.target.value)
  }

  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className='flex justify-center'>
      <select onChange={handleChangeSearchCriteria}>
        <option value=''>Name</option>
        <option value='s:'>Set</option>
        <option value='t:'>Type</option>
        <option value='r:'>Rarity</option>
        <option value='a:'>Artist</option>
      </select>
      <input
        className='border border-gray-300 rounded-lg p-2'
        placeholder='Search for a card...'
        onChange={handleChangeQuery}
      />        
      <button onClick={(e) => handleClick(e)} className='bg-blue-500 text-white rounded-lg p-2 ml-2'>
        Search
      </button>
    </div>
    )
}