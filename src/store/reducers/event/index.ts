import { EventActionEnum, EventActions, EventState } from "./types";

const initialState: EventState = {
  guests: [],
  events: [],
};

export default function eventReducer(state = initialState, action: EventActions): EventState {
  switch (action.type) {
    case EventActionEnum.SetGuests:
      return { ...state, guests: action.payload };
    case EventActionEnum.SetEvents:
      return { ...state, events: action.payload };
    default:
      return state;
  }
}
