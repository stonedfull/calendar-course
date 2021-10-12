import { Layout, Modal } from "antd";
import moment, { Moment } from "moment";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { uid } from "uid";
import { Calendar } from "../components/Calendar";
import { EventForm } from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Event as EventType } from "../models/Event";
import { formatDate } from "../utils/date";

interface LocalEvent extends Omit<EventType, "date"> {
  date: Moment;
}

export const Event = (): ReactElement => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { guests, events } = useTypedSelector((state) => state.event);
  const { fetchGuests, fetchEvents, createEvent, removeEvent } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const [selected, setSelected] = useState<Moment>();

  const getEvent = useCallback(
    (date: Moment): LocalEvent => ({
      id: uid(),
      author: user.username,
      guest: "",
      date,
      description: "",
    }),
    [user],
  );
  const [event, setEvent] = useState<LocalEvent>(getEvent(moment()));

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const handleSubmit = useCallback(() => {
    setModalVisible(false);
    createEvent({ ...event, date: formatDate(event.date.toDate()) });
    setEvent(getEvent(moment()));
  }, [event, createEvent, setModalVisible, setEvent, getEvent]);
  const handleRemove = useCallback((id: string) => removeEvent(id), [removeEvent]);
  const handleAddEvent = useCallback(
    (v: Moment) => {
      setEvent(getEvent(v));
      setModalVisible(true);
    },
    [setEvent, setModalVisible, getEvent],
  );

  return (
    <Layout>
      <Calendar
        events={events}
        selected={selected}
        onRemove={handleRemove}
        onAdd={handleAddEvent}
        onSelect={setSelected}
      />
      {modalVisible && (
        <Modal title="Add an event" visible={modalVisible} footer={null} onCancel={() => setModalVisible(false)}>
          <EventForm guests={guests} value={event} onChange={setEvent} onSubmit={handleSubmit} />
        </Modal>
      )}
    </Layout>
  );
};
