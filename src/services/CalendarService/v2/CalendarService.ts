import { ICalendarResponse, IApplicationEvent } from "../../../models/CalendarEvent";
import { AllCalendarData } from "./CalendarData";
// import { conferenceAPI } from "./constants";
import moment from "moment";
import { conferenceAPI } from "../../constants";

export const CalendarService = {
  async getAll(): Promise<ICalendarResponse[]> {
    try {
      const { data } = await conferenceAPI.get('/api/all')
      return data
    } catch (err) {
      return [];
    }
  },
  async getUpcoming(): Promise<ICalendarResponse[]> {
    try {
      const { data } = await conferenceAPI.get('/api/upcoming')
      return data
    } catch (err) {
      return [];
    }
  }
};

function findLargestAppEndDate(alpha: ICalendarResponse) {
  let alphaAppDate: Date = new Date()
  // default value is v high
  alphaAppDate.setFullYear(alphaAppDate.getFullYear() + 10)
  if (alpha.applications && alpha.applications.length > 0) {
    // select the largest 
    alpha.applications.forEach((app, index) => {
      if (index == 0) {
        alphaAppDate = app.end_date
      } else if (app.end_date < alphaAppDate) {
        alphaAppDate = app.end_date
      }
    })
  }
  // console.log("findLargestAppEndDate", alphaAppDate)
  return alphaAppDate
}

export enum sortBy {
  name,
  application,
  event
}

export default CalendarService;
