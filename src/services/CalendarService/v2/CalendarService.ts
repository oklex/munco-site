import { ICalendarResponse } from "../../../models/CalendarEvent";
import { AllCalendarData } from "./CalendarData";
// import { conferenceAPI } from "./constants";
import moment from "moment";

export const CalendarService = {
  async getAll(): Promise<ICalendarResponse[]> {
    try {
      const data:ICalendarResponse[] = AllCalendarData;
      console.log("all", data);
      return data;
    } catch (err) {
      return [];
    }
  }
};

export default CalendarService;
