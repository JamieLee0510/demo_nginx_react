import React from "react";
import "./card.css";
interface ICardProp {
  src: string;
  title: string;
}

export default function Card({ src, title }: ICardProp) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <span>{title}</span>
    </div>
  );
}
