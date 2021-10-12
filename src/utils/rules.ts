import moment, { Moment } from "moment";

export const rules = {
  required: (message: string = "Required field") => ({ required: true, message }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.startOf("day").isSameOrAfter(moment().startOf("day"))) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
