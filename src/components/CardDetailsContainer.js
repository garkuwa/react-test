import React from "react";
import { useEffect, useState } from "react";

import Card from "./Card";
import store from "../store/store";

export default function CardDetailsContainer() {
  const id = +window.location.pathname.split("/")[2];
  let [card, setCard] = useState();
  useEffect(() => {
    setCard(() => store.getState().items.find((item) => item.id === id));
  }, [id]);

  return <Card card={card} />;
}
