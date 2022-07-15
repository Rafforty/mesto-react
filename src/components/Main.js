import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([])
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  

  React.useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatarbutton" type="button" aria-label="avatar edit" onClick={onEditAvatar} />
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        <div className="profile__info-container">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit" type="button" aria-label="edit profile" onClick={onEditProfile} />
          </div>
          <h2 className="profile__about">{userDescription}</h2>
        </div>
        <button className="profile__addbutton" type="button" aria-label="add button" onClick={onAddPlace} />
      </section>
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card={card}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}


export default Main;