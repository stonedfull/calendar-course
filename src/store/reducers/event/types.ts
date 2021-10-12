import { Event } from "../../../models/Event";
import { User } from "../../../models/User";

export interface EventState {
  guests: User[];
  events: Event[];
}

export enum EventActionEnum {
  SetGuests = "setGuests",
  SetEvents = "setEvents",
}

export interface SetGuestsAction {
  type: EventActionEnum.SetGuests;
  payload: User[];
}

export interface SetEventsAction {
  type: EventActionEnum.SetEvents;
  payload: Event[];
}

export type EventActions = SetGuestsAction | SetEventsAction;
