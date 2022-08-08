function ImagePopup({ card, onClose }) {
    
  return (
    <div className={`popup popup_type_image ${card.link ? "popup_type_open" : ""}`}>
      <figure className="popup__figure">
        <img className="popup__image" src={card.link} alt={card.name} />
        <button
          className="popup__close"
          id="closePreview"
          type="button"
          aria-label="close"
          onClick={onClose}
        />
        <figcaption className="popup__caption">{card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
