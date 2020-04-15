import { ICalendarResponse, IApplicationEvent } from "../../../models/CalendarEvent";
import { AllCalendarData } from "./CalendarData";
// import { conferenceAPI } from "./constants";
import moment from "moment";

export const CalendarService = {
  async getAll(sortType?: sortBy): Promise<ICalendarResponse[]> {
    try {
      let currentDate: Date = new Date()
      const data: ICalendarResponse[] = AllCalendarData;
      if (sortType == sortBy.application) {
        data.forEach(obj => {
          if (obj.applications) {
            obj.applications = obj.applications.filter(app => {
              if (app.end_date < currentDate) {
                console.log("closed!", app.end_date)
                return false // remove this element
              } else return true
            })
            // console.log("filtered: ", obj.applications)
          }
        })
        data.sort((alpha, beta) => {
          let alphaAppDate: Date = findLargestAppEndDate(alpha)
          let betaAppDate: Date = findLargestAppEndDate(beta)
          if (alphaAppDate < betaAppDate) return -1
          else if (alphaAppDate > betaAppDate) return 1
          else return 0
        })
      }
      console.log("all", data);
      return data;
    } catch (err) {
      return [];
    }
  },
  async getUpcoming(): Promise<ICalendarResponse[]> {
    try {
      let currentDate: Date = new Date()
      const weekFromNow: Date = moment(new Date())
        .add(7, "days")
        .toDate()
      const returnData: ICalendarResponse[] = []
      const data: ICalendarResponse[] = AllCalendarData;

      data.forEach(obj => {
        if (obj.applications) {
          obj.applications = obj.applications.filter(app => {
            if (app.end_date < currentDate) {
              console.log("closed!", app.end_date)
              return false // remove this element
            } else return true
          })
          // console.log("filtered: ", obj.applications)
        }
      })

      data.sort((alpha, beta) => {
        let alphaAppDate: Date = findLargestAppEndDate(alpha)
        let betaAppDate: Date = findLargestAppEndDate(beta)
        if (alphaAppDate < betaAppDate) return -1
        else if (alphaAppDate > betaAppDate) return 1
        else return 0
      })

      data.forEach(obj => {
        if (obj.applications && obj.applications.length != 0) {
          let objEndDate: Date = findLargestAppEndDate(obj);
          if (objEndDate < weekFromNow || returnData.length < 4) {
            returnData.push(obj);
          }
        }
      })
      return returnData
    } catch (err) {
      return []
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
