export default function CardImage({card}) {

    const checkCardImages = () => {
        if (card.card_faces) {
            return card.card_faces[0].image_uris.normal
        } else {
            return card.image_uris.normal
        }
    }
    return (
        <div>
            <h1>{card.name}</h1>
            <img className='rounded-3xl' src={checkCardImages()} alt={card.name}/>
        </div>
    )
}