import React, { useEffect } from "react";
import "./TinderCards.css";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  // {
  //   name: "Morgan Rose Moroney",
  //   url:
  //     "https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/151512152_268213261343139_6455149730697645550_o.jpg?_nc_cat=109&ccb=3&_nc_sid=84a396&_nc_ohc=H5TK_2cZbTsAX888DjW&_nc_ht=scontent-dub4-1.xx&oh=348a594e0034f207dc2fb6208079ccf0&oe=6063EF53",
  // },

  // {
  //   name: "Blanca Friedrich",
  //   url:
  //     "https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/129159003_100644981914542_6731434724287288960_n.jpg?_nc_cat=104&ccb=3&_nc_sid=174925&_nc_ohc=XHZ3e_D0uFcAX8KRJoG&_nc_ht=scontent-dub4-1.xx&oh=33c9196803e4b48517e856d5b6279aaf&oe=60668ACF",
  // },

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
