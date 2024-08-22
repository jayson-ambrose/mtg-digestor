export default function CardListItem({ card }) {
    return (
        <div className='border border-slate-600 rounded-lg flex justify-between'>
            <p>{card.name}</p>
            <p>{card.types}</p>
        </div>
    )
}