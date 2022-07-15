function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="cards__element">
      <button className="cards__delete" type="button" aria-label="delete button"/>
      <img className="cards__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
      <div className="cards__caption">
        <p className="cards__text">{props.card.name}</p>
        <div className="cards__like_container">
          <button className="cards__like" type="button" aria-label="like" />
          <span className="cards__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;