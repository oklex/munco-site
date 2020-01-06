import {
  IConferenceEvent,
  ICalendarResponse,
  IApplicationEvent,
  IApplicationType,
  IOrganizationType
} from "../../../models/CalendarEvent";

/* 
testing types:
- search for: all -> full card
- search for: registration -> card with event & application (type: delegateRegistration)
- search for: applications -> card with applications
*/

export const AllCalendarData: ICalendarResponse[] = [
  {
    organization: {
      short_name: "VMUN",
      full_name: "Vancouver Model United Nations",
      organization_type: IOrganizationType.schoolSponsored,
      website: "https://vmun.com/",
      running_since: new Date("January, 2002")
    },
    event: {
      venue_name: "Hyatt Regency Hotel",
      venue_city: "Downtown Vancouver",
      start_date: new Date("February 14, 2020"),
      end_date: new Date("February 16, 2020"),
      dates_tentative: false,
      tags: ["hotel conference", "running 10+ years"]
    },
    applications: [
      {
        name: "Late Registration",
        type: IApplicationType.Delegate,
        start_date: new Date("January 1, 2020"),
        end_date: new Date("February 10, 2020"),
        dates_tentative: false,
        cost: 215
      },
      {
        name: "Secretariat Applications",
        type: IApplicationType.Secretariat,
        start_date: new Date("February 20, 2020"),
        end_date: new Date("April 1, 2020"),
        dates_tentative: true,
        cost: null
      },
      {
        name: "Staff hiring",
        type: IApplicationType.Staff,
        start_date: new Date(),
        end_date: new Date(),
        dates_tentative: true,
        cost: null
      }
    ]
  },
  {
    organization: {
      short_name: "CAHSMUN",
      full_name: "Canadian High School Model United Nations",
      organization_type: IOrganizationType.nonProfit,
      website: "https://cahsmun.org/",
      running_since: new Date("April, 2004")
    },
    event: {
      venue_name: "Sheraton Wall Centre",
      venue_city: "Vancouver, BC",
      start_date: new Date("April 3, 2020"),
      end_date: new Date("April 5, 2020"),
      dates_tentative: false,
      tags: ["hotel conference", "running 10+ years"]
    },
    applications: [
      {
        name: "Late Registration",
        type: IApplicationType.Delegate,
        start_date: new Date("January 1, 2020"),
        end_date: new Date("February 10, 2020"),
        dates_tentative: false,
        cost: 215
      },
      {
        name: "Secretariat Applications",
        type: IApplicationType.Secretariat,
        start_date: new Date("February 20, 2020"),
        end_date: new Date("April 1, 2020"),
        dates_tentative: true,
        cost: null
      },
      {
        name: "Staff hiring",
        type: IApplicationType.Staff,
        start_date: new Date(),
        end_date: new Date(),
        dates_tentative: true,
        cost: null
      }
    ]
  }
];

export default AllCalendarData;
