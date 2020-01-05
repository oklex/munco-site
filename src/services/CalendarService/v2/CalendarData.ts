import {ConferenceEvent} from '../../../models/CalendarEvent'
import {ApplicationEvent} from '../../../models/CalendarEvent'
import {ApplicationType} from '../../../models/CalendarEvent'

export const AllCalendarData: ConferenceEvent[] = [
    {
      short_name: "VMUN",
      full_name: "Vancouver Model United Nations",
      venue_name: "Hyatt Regency Hotel",
      venue_city: "Downtown Vancouver",
      website: "vmun.com",
      start_date: new Date("February 14, 2020"),
      end_date: new Date("February 16, 2020"),
      running_since: new Date("January, 2002"),
      tags: ["hotel conference", "running 10+ years"],
      events: [
        {
          name: "Late Registration",
          type: ApplicationType.Delegate,
          start_date: new Date("January 1, 2020"),
          end_date: new Date("February 10, 2020"),
          dates_tentative: false,
          cost: 215
        },
        {
          name: "Secretariat Applications",
          type: ApplicationType.Secretariat,
          start_date: new Date("February 20, 2020"),
          end_date: new Date("April 1, 2020"),
          dates_tentative: true,
          cost: null
        },
        {
          name: "Staff hiring",
          type: ApplicationType.Staff,
          start_date: new Date(),
          end_date: new Date(),
          dates_tentative: true,
          cost: null
        }
      ]
    },

  ];
  
  export default AllCalendarData;
  