import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import store from "../store/store";
import { startFetchingCards } from "../saga/sags";

function CardDetailsContainer(props) {
  useEffect(() => {
    if (store.getState().items.length === 0) {
      store.dispatch(startFetchingCards);
    }
  }, []);

  return <Card card={props.card} />;
}


const mapStateToProps = (state, ownProps) => ({
  card: state.items.find(item => item.id === ownProps.id),
});


export default connect(mapStateToProps)(CardDetailsContainer);
