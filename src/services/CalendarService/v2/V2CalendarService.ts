import CalendarEvent from "../../../models/CalendarEvent";
// import { conferenceAPI } from "./constants";
import moment from "moment";

export const CalendarService = {
  async getUpcoming(): Promise<CalendarEvent[]> {
    // try {
    //   //
    //   const timeNow: moment.Moment = moment();
    //   var oneMonthLater: moment.Moment = timeNow.add(1, 'M');
    //   const allEvents: CalendarEvent[] = AllCalendarData;
    //   var upcomingEvents: CalendarEvent[] = [];
    //   for (var i: number = 0; i < allEvents.length; i++) {
    //     // if the date is later than right now, add to new list
    //     const startDate: any = allEvents[i].start_date
    //     if (allEvents[i].start_date && startDate > timeNow) {
    //       if (
    //         upcomingEvents.length < 3 ||
    //         startDate <= oneMonthLater
    //       ) {
    //         upcomingEvents.push(allEvents[i]);
    //       } else {
    //         break
    //       }
    //     }
    //   }
    //   //
    //   console.log("getMostRecent", upcomingEvents);
    //   return upcomingEvents;
    // } catch (err) {
      return [];
    // }
  },
  async getAll(): Promise<CalendarEvent[]>  {
    // try {
    //   const data = AllCalendarData;
    //   console.log("all", data);
    //   return data;
    // } catch (err) {
      return [];
    // }
  }
};

export default CalendarService;
