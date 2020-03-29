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
    event: null,
    applications: [
      {
        name: "VMUN Secretariat Applications",
        type: IApplicationType.Secretariat,
        start_date: new Date("February 20, 2020"),
        end_date: new Date("March 29, 2020, 23:59:59"),
        dates_tentative: false,
        applicationLink: "https://vmun.com/apply/",
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
    event: null,
    applications: [
      {
        name: "CAHSMUN Secretariat Applications",
        type: IApplicationType.Secretariat,
        start_date: new Date("February 20, 2020"),
        end_date: new Date("April 12, 2020, 23:59:59"),
        applicationLink: "https://cahsmun.org/apply",
        dates_tentative: false,
        cost: null
      }
    ]
  },
  {
    organization: {
      short_name: "CAHSMUN Horizons",
      full_name: "Cahsmun Horizons",
      organization_type: IOrganizationType.nonProfit,
      website: "https://www.horizons.cahsmun.org/",
      running_since: new Date("Nov, 2019")
    },
    event: null,
    applications: [
      {
        name: "Horizons Secretariat Applications",
        type: IApplicationType.Secretariat,
        start_date: new Date("February 20, 2020"),
        end_date: new Date("April 12, 2020, 23:59:59"),
        applicationLink: "https://cahsmun.org/apply",
        dates_tentative: false,
        cost: null
      }
    ]
  },
  {
    organization: {
      short_name: "CAIMUN",
      full_name: "Canadian International Model United Nations",
      organization_type: IOrganizationType.nonProfit,
      website: "https://www.caimun.ca/",
      running_since: new Date("April, 2009")
    },
    event: null,
    applications: [
      // {
      //   name: "CAIMUN Secretariat Applications",
      //   type: IApplicationType.Secretariat,
      //   start_date: new Date("April 15, 2020"),
      //   end_date: new Date("April 30, 2020"),
      //   applicationLink: "https://cahsmun.org/apply",
      //   dates_tentative: true,
      //   cost: null
      // },
      // {
      //   name: "TEST Secretariat Applications",
      //   type: IApplicationType.Secretariat,
      //   start_date: new Date("March 15, 2020"),
      //   end_date: new Date("March 26, 2020, 23:59:59"),
      //   applicationLink: "https://cahsmun.org/apply",
      //   dates_tentative: false,
      //   cost: null
      // }
    ]
  },
  {
    organization: {
      short_name: "CYDCMUN",
      full_name: "Canadian Youth Debate Council Model United Nations",
      organization_type: IOrganizationType.studentProject,
      website: "http://cydcmun.org/",
      running_since: new Date("April, 2019")
    },
    event: null,
    applications: [
      // {
      //   name: "CAIMUN Secretariat Applications",
      //   type: IApplicationType.Secretariat,
      //   start_date: new Date("March 20, 2020"),
      //   end_date: new Date("April 29, 2020"),
      //   applicationLink: "https://cahsmun.org/apply",
      //   dates_tentative: true,
      //   cost: null
      // }
    ]
  },
  {
    organization: {
      short_name: "RichMUN",
      full_name: "Richmond Model United Nations",
      organization_type: IOrganizationType.studentProject,
      website: "https://richmun.ca/",
      running_since: new Date("April, 2014")
    },
    event: null,
    applications: []
  },
  {
    organization: {
      short_name: "VYMUN",
      full_name: "Vancouver Youth Model United Nations",
      organization_type: IOrganizationType.studentProject,
      website: "https://www.vymun.com",
      running_since: new Date("October, 2005")
    },
    event: null,
    applications: []
  },
  {
    organization: {
      short_name: "VMUN",
      full_name: "Vancouver Model United Nations",
      organization_type: IOrganizationType.schoolSponsored,
      website: "https://vmun.com/",
      running_since: new Date("January, 2002")
    },
    event: null,
    applications: []
  },
  {
    organization: {
      short_name: "PacificMUN",
      full_name: "Pacific Model United Nations",
      organization_type: IOrganizationType.studentProject,
      website: "https://www.pacificmun.org",
      running_since: new Date("January, 2016")
    },
    event: null,
    applications: []
  },

  {
    organization: {
      short_name: "NorthMUN",
      full_name: "North Model United Nations",
      organization_type: IOrganizationType.studentProject,
      website: "https://www.northmun.com",
      running_since: new Date("January, 2019")
    },
    event: null,
    applications: []
  },
  {
    organization: {
      short_name: "SPAMUN",
      full_name: "Southpointe Academy Model United Nations",
      organization_type: IOrganizationType.schoolSponsored,
      website: "https://spamun.org/",
      running_since: new Date("April, 2019")
    },
    event: null,
    applications: [
      {
        name: "SPAMUN Secretariat Applications",
        type: IApplicationType.Secretariat,
        start_date: new Date("February 20, 2020"),
        end_date: new Date("April 8, 2020, 23:59:59"),
        applicationLink: "https://form.jotform.com/200615497979066",
        dates_tentative: false,
        cost: null
      }
    ]
  }
];

export default AllCalendarData;
