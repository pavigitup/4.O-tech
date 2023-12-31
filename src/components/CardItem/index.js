import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  const card = 'card'
  const classNames = `${className} ${card}`

  return (
    <li className={classNames}>
      <h1 className="h1">{title}</h1>
      <p className="p">{description}</p>
      <div className="img-con">
        <img src={imgUrl} className="images" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
