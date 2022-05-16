import React from "react";
import Card from "../components/Card/Card";

const list = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/47/T.O.P_-_0.TO.10_in_Seoul_-_2.jpg",
    title: "Top",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Taeyang_-_MADE_THE_MOVIE_Premiere_%28Chopped%29.png",
    title: "Taeyang",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/47/G-Dragon_on_Infinite_Challenge_Yeongdong_Expressway_Music_Festival_-_4.jpg",
    title: "GD",
  },
];

export default function DrapList() {
  return (
    <div>
      <Card {...list[0]} />
    </div>
  );
}
