import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { MouseEvent, ReactElement, useCallback } from "react";
import { Event as EventType } from "../models/Event";

export interface Props {
  event: EventType;
  onRemove: (id: string) => void;
}

export const EventItem = ({ event, onRemove }: Props): ReactElement => {
  const handleRemove = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      onRemove(event.id);
    },
    [event, onRemove],
  );

  return (
    <div>
      <Space size={10}>
        {event.description}
        <DeleteOutlined onClick={handleRemove} />
      </Space>
    </div>
  );
};
