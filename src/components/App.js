import '../index.css';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="root">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        formName="profile-edit"
        title="Редактировать профиль"
        text="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups} 
      >
        <input 
          className="popup__input popup__input_name"
          type="text"
          name="name"
          id="profileName"
          placeholder="Имя"
          required
          minLength= "2"
          maxLength= "40"
        />
        <span className="popup__input-error profileName-error" />
        <input 
          className="popup__input popup__input_about"
          type="text"
          name="about"
          id="profileAbout"
          placeholder="О себе"
          required
          minLength= "2"
          maxLength= "200"
        />
        <span className="popup__input-error profileAbout-error"/>
      </PopupWithForm>
      <PopupWithForm
        name="cards"
        formName="add-cards"
        title="Новое место"
        text="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          id="placeName"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength= "2"
          maxLength= "30"
        />
        <span className="popup__input-error placeName-error" />
        <input 
          className="popup__input"
          id="placeLink"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error placeLink-error" />
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        formName="avatar-form"
        title="Обновить аватар"
        text="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input 
          className="popup__input"
          id="avatarLink"
          type="url"
          name="link"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__input-error avatarLink-error" />
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      >
      </ImagePopup>
    </div>
  );
}

export default App;
