

export default function Searchbar({ getCards }) {

    const handleClick = () => {
        getCards()
    }

    return (
      <div className='flex justify-center'>
        <input
          className='border border-gray-300 rounded-lg p-2'
          placeholder='Search for a card...'
        />
        <button onClick={() => handleClick()} className='bg-blue-500 text-white rounded-lg p-2 ml-2'>
          Search
        </button>
      </div>
    )
}