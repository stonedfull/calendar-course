import { Button, Calendar as Component, Col, Row } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import moment, { Moment } from "moment";
import { ReactElement } from "react";
import { Event } from "../models/Event";
import { formatDate } from "../utils/date";
import { EventItem } from "./EventItem";

export interface Props {
  events: Event[];
  selected?: Moment;
  onRemove: (id: string) => void;
  onAdd: (v: Moment) => void;
  onSelect: (v: Moment) => void;
}

export const Calendar = ({ events, selected, onRemove, onAdd, onSelect }: Props): ReactElement => {
  function dateCellRender(value: Moment) {
    const formedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formedDate);

    return (
      <Row>
        <Col span={20}>
          {currentDayEvents.map((event) => (
            <EventItem key={event.id} event={event} onRemove={onRemove} />
          ))}
        </Col>
        {((selected && formatDate(selected.toDate()) === formedDate) ||
          (!selected && formatDate(moment().toDate()) === formedDate)) && (
          <Col span={4}>
            <Button type="text" size="small" onClick={() => onAdd(value)}>
              <PlusCircleOutlined />
            </Button>
          </Col>
        )}
      </Row>
    );
  }

  return <Component dateCellRender={dateCellRender} onSelect={onSelect} />;
};
