import React from "react";
import data from "./data";
import { MapPin } from "lucide-react";
function TravelBody() {
  const cards = data.map((item) => {
    return (
      <article key={item.id}>
        <img s={item.img.src} width={150} />
        <div>
          <MapPin />
          <span>{item.country}</span>
          <br />
          <h3>{item.dates}</h3>
          <a>href={item.googleMapsLink}</a>
        </div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>{" "}
      </article>
    );
  });
  return <section>{cards}</section>;
}

export default TravelBody;
