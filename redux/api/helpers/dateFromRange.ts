import { DateRange } from "../apiTypes";

export const pastDateFromRange = (range: DateRange): string => {
  let date = new Date();

  switch (range) {
    case DateRange.Day:
      date.setDate(date.getDate() - 1);
      return date.toISOString();
    case DateRange.Week:
      date.setDate(date.getDate() - 7);
      return date.toISOString();
    case DateRange.Month:
      date.setDate(date.getDate() - 31);
      return date.toISOString();
    case DateRange.All:
      return new Date(2011, 6, 1).toISOString();
  }
};
