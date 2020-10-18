import { fetchCards } from "../actions/actions";
import Home from "./Home";
import { startFetchingCards } from "../saga/sags";
import store from "../store/store";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  cards: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  loadCards: () => dispatch(startFetchingCards),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
