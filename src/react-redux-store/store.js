import { createStore } from "redux";
import ShortlistedReducer from "./reducer";

const store = createStore(ShortlistedReducer);

export default store;
