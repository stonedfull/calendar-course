import { ChangeEvent, ReactElement, useCallback } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Moment } from "moment";
import { rules } from "../utils/rules";
import { User } from "../models/User";
import { Event } from "../models/Event";

interface LocalEvent extends Omit<Event, "date"> {
  date: Moment;
}

export interface Props {
  value: LocalEvent;
  guests: User[];
  onChange: (e: LocalEvent) => void;
  onSubmit: VoidFunction;
}

export const EventForm = ({ value, guests, onChange, onSubmit }: Props): ReactElement => {
  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange({ ...value, description: e.target.value }),
    [value, onChange],
  );
  const selectDate = useCallback(
    (date: Moment | null) => {
      date && onChange({ ...value, date });
    },
    [value, onChange],
  );
  const handleChangeGuest = useCallback((guest: string) => onChange({ ...value, guest }), [value, onChange]);

  return (
    <Form onFinish={onSubmit} initialValues={value}>
      <Form.Item label="Event description" name="description" rules={[rules.required()]}>
        <Input onChange={handleChangeDescription} />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required(), rules.isDateAfter("Cannot create an event in the past")]}
      >
        <DatePicker onChange={selectDate} />
      </Form.Item>
      <Form.Item label="Select guest" name="guest" rules={[rules.required()]}>
        <Select value={value.guest} onChange={handleChangeGuest}>
          {guests.map(({ username }) => (
            <Select.Option key={username} value={username}>
              {username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};
