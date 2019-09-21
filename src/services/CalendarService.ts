import CalendarEvent from '../models/CalendarEvent'

export const CalendarService = {
    async getUpcoming() {
        // expect: list to be sorted by date
        const timeNow: Date = new Date();
        var oneMonthLater: Date = new Date();
        oneMonthLater.setMonth(timeNow.getMonth() + 1);
        const allEvents: CalendarEvent[] = AllCalendarData;
        var upcomingEvents: CalendarEvent[] = [];
        for (var i: number = 0; i < allEvents.length; i++) {
            const start = allEvents[i].start_date
            // if the date is later than right now, add to new list
            if (start) {
                if (start > timeNow) {
                    if (
                        upcomingEvents.length < 3 ||
                        start <= oneMonthLater
                    ) {
                        upcomingEvents.push(allEvents[i]);
                    } else {
                        break
                    }
                }
            }
        } return upcomingEvents
    },
    async getAll() {
        return AllCalendarData
    }
}

const AllCalendarData: CalendarEvent[] = [
    {
        conference_id: 1,
        short_name: "BurnettMUN",
        name_prefix: "Burnett",
        venue_name: "J.N. Burnett Secondary School",
        venue_city: "Richmond, BC",
        start_date: null,
        end_date: null,
        website: "https://burnettmun.org",
        running_since: new Date("May 2018"),
        tags: ["day conference"],
        cost: null,
        confirmed: false
    },
    {
        conference_id: 2,
        short_name: "SPAMUN",
        name_prefix: " Southpointe Academy's",
        venue_name: "Southpointe Academy",
        venue_city: "Delta, BC",
        start_date: new Date("Oct 20, 2019"),
        end_date: new Date("Oct 20, 2019"),
        website: "https://spamun.org",
        running_since: new Date("Oct 20, 2019"),
        tags: ["day conference", "new"],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 3,
        short_name: "VYMUN",
        name_prefix: "Vancouver Youth",
        venue_name: "Fairmont Chateau Whistler",
        venue_city: "Whistler, BC",
        start_date: new Date("October 25, 2019"),
        end_date: new Date("October 27, 2019"),
        website: "https://www.vymun.com",
        running_since: new Date("October, 2005"),
        tags: ["overnight conference", "private school funded", "gr 7-10 only"],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 4,
        short_name: "BEVMUN",
        name_prefix: "Beginners Education for the Valley",
        venue_name: "Abbotsford Senior Secondary School",
        venue_city: "Abbotsford, BC",
        start_date: new Date("October 26, 2019"),
        end_date: new Date("October 10, 2019"),
        website: "https://www.bevmun.com",
        running_since: null,
        tags: ["overnight conference", "private school funded", "gr 7-10 only"],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 5,
        short_name: "TerryFoxMUN",
        name_prefix: "Terry Fox",
        venue_name: "Terry Fox Secondary School",
        venue_city: "Port Coquitlam, BC",
        start_date: new Date("November 16, 2019"),
        end_date: new Date("November 16, 2019"),
        website: "https://www.terryfoxmun.com/",
        running_since: new Date("November 16, 2019"),
        tags: ["day conference"],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 6,
        short_name: "Seattle PACMUN",
        name_prefix: "Seattle Pacific",
        venue_name: " Sheraton Seattle ",
        venue_city: "Seattle, WA, USA",
        start_date: new Date("November 22, 2019"),
        end_date: new Date("November 24, 2019"),
        website: "https://pacificmun.com",
        running_since: new Date("November, 2017"),
        tags: ["International conference"],
        cost: null,
        confirmed: true
    },
];

export default CalendarService