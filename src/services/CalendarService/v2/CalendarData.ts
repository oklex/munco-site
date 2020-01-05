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
      tags: [],
      events: []
    },

  ];
  
  export default AllCalendarData;
  