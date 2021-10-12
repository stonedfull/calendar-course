import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
  setGuests: (payload: User[]): SetGuestsAction => ({ type: EventActionEnum.SetGuests, payload }),
  setEvents: (payload: Event[]): SetEventsAction => ({ type: EventActionEnum.SetEvents, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") ?? "[]";
      const json = JSON.parse(events) as Event[];
      const currentUserEvents = json.filter((ev) => ev.author === username || ev.guest === username);
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: Event) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") ?? "[]";
      const json = JSON.parse(events) as Event[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  },
  removeEvent: (id: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") ?? "[]";
      const json = JSON.parse(events) as Event[];
      const newArr = json.filter((ev) => ev.id !== id);
      dispatch(EventActionCreators.setEvents(newArr));
      localStorage.setItem("events", JSON.stringify(newArr));
    } catch (e) {
      console.log(e);
    }
  },
};
