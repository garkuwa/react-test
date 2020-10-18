import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";

const Home = ({ cards, loadCards }) => {
  useEffect(() => {
    loadCards();
  }, []);

  return (
    <div className="Grid animated bounceInUp">
      {cards?.map((card) => (
        <Link key={card?.id} to={`/details/${card?.id}`}>
          <Card duration={150} card={card} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
