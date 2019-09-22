import CalendarEvent from "../models/CalendarEvent";
import { conferenceAPI } from "./constants";

// error might be caused by the data type of date not transfering as a date object

export const CalendarService = {
  async getUpcoming(): Promise<CalendarEvent[]> {
    try {
      const { data } = await conferenceAPI.get("/upcoming");
      console.log("getMostRecent", data);
      return data;
    } catch (err) {
      return [];
    }
  },
  async getAll(): Promise<CalendarEvent[]>  {
    try {
      const { data } = await conferenceAPI.get("/all");
      console.log("all", data);
      return data;
    } catch (err) {
      return [];
    }
  }
};

// const AllCalendarData: CalendarEvent[] = [
//   {
//     conference_id: 1,
//     short_name: "BurnettMUN",
//     name_prefix: "Burnett",
//     venue_name: "J.N. Burnett Secondary School",
//     venue_city: "Richmond, BC",
//     start_date: null,
//     end_date: null,
//     website: "https://burnettmun.org",
//     running_since: new Date("May 2018"),
//     tags: ["day conference"],
//     cost: null,
//     confirmed: false
//   },
//   {
//     conference_id: 2,
//     short_name: "SPAMUN",
//     name_prefix: " Southpointe Academy's",
//     venue_name: "Southpointe Academy",
//     venue_city: "Delta, BC",
//     start_date: new Date("Oct 20, 2019"),
//     end_date: new Date("Oct 20, 2019"),
//     website: "https://spamun.org",
//     running_since: new Date("Oct 20, 2019"),
//     tags: ["day conference", "new"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 3,
//     short_name: "VYMUN",
//     name_prefix: "Vancouver Youth",
//     venue_name: "Fairmont Chateau Whistler",
//     venue_city: "Whistler, BC",
//     start_date: new Date("October 25, 2019"),
//     end_date: new Date("October 27, 2019"),
//     website: "https://www.vymun.com",
//     running_since: new Date("October, 2005"),
//     tags: ["hotel conference", "private school funded", "gr 7-10 only"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 4,
//     short_name: "BEVMUN",
//     name_prefix: "Beginners Education for the Valley",
//     venue_name: "Abbotsford Senior Secondary School",
//     venue_city: "Abbotsford, BC",
//     start_date: new Date("October 26, 2019"),
//     end_date: new Date("October 26, 2019"),
//     website: "https://www.bevmun.com",
//     running_since: null,
//     tags: ["day conference"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 5,
//     short_name: "TerryFoxMUN",
//     name_prefix: "Terry Fox",
//     venue_name: "Terry Fox Secondary School",
//     venue_city: "Port Coquitlam, BC",
//     start_date: new Date("November 16, 2019"),
//     end_date: new Date("November 16, 2019"),
//     website: "https://www.terryfoxmun.com/",
//     running_since: new Date("November 16, 2019"),
//     tags: ["day conference"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 6,
//     short_name: "Seattle PACMUN",
//     name_prefix: "Seattle Pacific",
//     venue_name: " Sheraton Seattle ",
//     venue_city: "Seattle, WA, USA",
//     start_date: new Date("November 22, 2019"),
//     end_date: new Date("November 24, 2019"),
//     website: "https://pacificmun.com",
//     running_since: new Date("November, 2017"),
//     tags: ["International", "hotel conferences"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 7,
//     short_name: "LGMUN",
//     name_prefix: "Lion's Gate",
//     venue_name: "Collingwood school",
//     venue_city: "West Vancouver, BC",
//     start_date: new Date("November 23, 2019"),
//     end_date: new Date("November 23, 2019"),
//     website: "https://www.lgmun.org/",
//     running_since: new Date("November, 2018"),
//     tags: ["day conference"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 8,
//     short_name: "CAHSMUN Horizons",
//     name_prefix: "Horizons",
//     venue_name: "Pinnacle Mariott Vancouver",
//     venue_city: "Vancouver, BC",
//     start_date: new Date("November 30, 2019"),
//     end_date: new Date("December 1, 2019"),
//     website: "https://www.horizons.cahsmun.org/",
//     running_since: new Date("November, 2018"),
//     tags: ["new"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 9,
//     short_name: "PRMUN",
//     name_prefix: "Panorama Ridge",
//     venue_name: "Panorama Ridge Secondary School",
//     venue_city: "Surrey, BC",
//     start_date: new Date("January 11, 2020"),
//     end_date: new Date("January 11, 2020"),
//     website: "https://prmun.org/",
//     running_since: new Date("January, 2019"),
//     tags: ["new"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 10,
//     short_name: "Pacific MUN",
//     name_prefix: "Pacific",
//     venue_name: "Pinnacle Harbourfront hotel",
//     venue_city: "Vancouver, BC",
//     start_date: new Date("January 17, 2020"),
//     end_date: new Date("January 19, 2020"),
//     website: "https://www.pacificmun.org",
//     running_since: new Date("January, 2016"),
//     tags: ["hotel conference"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 11,
//     short_name: "VMUN",
//     name_prefix: "Vancouver",
//     venue_name: "Hyatt Regency Hotel",
//     venue_city: "Vancouver, BC",
//     start_date: new Date("February 14, 2020"),
//     end_date: new Date("February 16, 2020"),
//     website: "https://vmun.com/",
//     running_since: new Date("January, 2002"),
//     tags: ["hotel conference"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 11,
//     short_name: "NorthMUN",
//     name_prefix: "North",
//     venue_name: "",
//     venue_city: "Burnaby, BC",
//     start_date: new Date("March 14, 2020"),
//     end_date: new Date("March 15, 2020"),
//     website: "https://vmun.com/",
//     running_since: new Date("January, 2019"),
//     tags: ["info TBA"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 12,
//     short_name: "Victoria SHAWMUN",
//     name_prefix: "Victoria SHAWMUN",
//     venue_name: "",
//     venue_city: "Victoria, BC",
//     start_date: new Date("April 3, 2020"),
//     end_date: new Date("April 4, 2020"),
//     website: "https://www.shawmun.com/",
//     running_since: new Date("April, 2019"),
//     tags: [""],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 13,
//     short_name: "CAHSMUN",
//     name_prefix: "Canadian Highschool",
//     venue_name: "Sheraton Wall Centre",
//     venue_city: "Vancouver, BC",
//     start_date: new Date("April 3, 2020"),
//     end_date: new Date("April 5, 2020"),
//     website: "https://cahsmun.org/",
//     running_since: new Date("April, 2004"),
//     tags: ["hotel conference"],
//     cost: null,
//     confirmed: true
//   },
//   {
//     conference_id: 14,
//     short_name: "RichMUN",
//     name_prefix: "Richmond",
//     venue_name: "Richmond City Hall",
//     venue_city: "Richmond, BC",
//     start_date: new Date("April, 2020"),
//     end_date: new Date("April, 2020"),
//     website: "https://richmun.ca/",
//     running_since: new Date("April, 2014"),
//     tags: ["day conference"],
//     cost: null,
//     confirmed: true
//   }
// ];

export default CalendarService;
