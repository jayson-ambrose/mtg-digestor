export default function CardListItem({ card }) {
    return (
        <div className='border border-gray-300 rounded-lg p-2 m-2 flex justify-between'>
            <div>
                <h2>{card.name}</h2>
                <p>{card.types}</p>
            </div>
        </div>
    )
}