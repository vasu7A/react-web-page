// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <div className={`${className} card`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  )
}

export default CardItem
