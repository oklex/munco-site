import CalendarEvent from '../models/CalendarEvent'

export const CalendarService = {
    async getUpcoming() {
        return UpcomingCalendarData
    },
    async getAll() {
        return AllCalendarData
    }
}

const UpcomingCalendarData: CalendarEvent[] = [
    {
        conference_id: 1,
        short_name: 'BurnettMUN',
        name_prefix: 'Burnett',
        venue_name: 'J.N. Burnett Secondary School',
        venue_city: 'Richmond, BC',
        start_date: null,
        end_date: null,
        website: 'https://burnettmun.org',
        running_since: new Date(2018, 5),
        tags: [
            'day conference'
        ],
        cost: null,
        confirmed: false
    },
    {
        conference_id: 2,
        short_name: 'SPAMUN',
        name_prefix: ' Southpointe Academy\'s',
        venue_name: 'Southpointe Academy',
        venue_city: 'Delta, BC',
        start_date:  new Date(2019, 5, 20),
        end_date: new Date(2019, 5, 20),
        website: 'https://spamun.org',
        running_since: new Date(2019, 5, 20),
        tags: [
            'day conference',
            'new'
        ],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 3,
        short_name: 'VYMUN',
        name_prefix: 'Vancouver Youth',
        venue_name: 'Fairmont Chateau Whistler',
        venue_city: 'Whistler, BC',
        start_date:  new Date(2019, 10, 25),
        end_date: new Date(2019, 10, 27),
        website: 'https://www.vymun.com',
        running_since: new Date(2005, 10),
        tags: [
            'overnight conference',
            'private school funded',
            'gr 7-10 only'
        ],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 4,
        short_name: 'BEVMUN',
        name_prefix: 'Beginners Education for the Valley',
        venue_name: 'Abbotsford Senior Secondary School',
        venue_city: 'Abbotsford, BC',
        start_date:  new Date(2019, 10, 26),
        end_date: new Date(2019, 10, 26),
        website: 'https://www.bevmun.com',
        running_since: null,
        tags: [
            'overnight conference',
            'private school funded',
            'gr 7-10 only'
        ],
        cost: null,
        confirmed: true
    }
]

const AllCalendarData: CalendarEvent[] = [
    {
        conference_id: 1,
        short_name: 'BurnettMUN',
        name_prefix: 'Burnett',
        venue_name: 'J.N. Burnett Secondary School',
        venue_city: 'Richmond, BC',
        start_date: null,
        end_date: null,
        website: 'https://burnettmun.org',
        running_since: new Date(2018, 5),
        tags: [
            'day conference'
        ],
        cost: null,
        confirmed: false
    },
    {
        conference_id: 2,
        short_name: 'SPAMUN',
        name_prefix: ' Southpointe Academy\'s',
        venue_name: 'Southpointe Academy',
        venue_city: 'Delta, BC',
        start_date:  new Date(2019, 5, 20),
        end_date: new Date(2019, 5, 20),
        website: 'https://spamun.org',
        running_since: new Date(2019, 5, 20),
        tags: [
            'day conference',
            'new'
        ],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 3,
        short_name: 'VYMUN',
        name_prefix: 'Vancouver Youth',
        venue_name: 'Fairmont Chateau Whistler',
        venue_city: 'Whistler, BC',
        start_date:  new Date(2019, 10, 25),
        end_date: new Date(2019, 10, 27),
        website: 'https://www.vymun.com',
        running_since: new Date(2005, 10),
        tags: [
            'overnight conference',
            'private school funded',
            'gr 7-10 only'
        ],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 4,
        short_name: 'BEVMUN',
        name_prefix: 'Beginners Education for the Valley',
        venue_name: 'Abbotsford Senior Secondary School',
        venue_city: 'Abbotsford, BC',
        start_date:  new Date(2019, 10, 26),
        end_date: new Date(2019, 10, 26),
        website: 'https://www.bevmun.com',
        running_since: null,
        tags: [
            'overnight conference',
            'private school funded',
            'gr 7-10 only'
        ],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 5,
        short_name: 'TerryFoxMUN',
        name_prefix: 'Terry Fox',
        venue_name: 'Terry Fox Secondary School',
        venue_city: 'Port Coquitlam, BC',
        start_date:  new Date(2019, 11, 16),
        end_date: new Date(2019, 11, 16),
        website: 'https://www.terryfoxmun.com/',
        running_since: new Date(2019, 11, 16),
        tags: [
            'day conference',
        ],
        cost: null,
        confirmed: true
    },
    {
        conference_id: 6,
        short_name: 'Seatle PACMUN',
        name_prefix: 'Seatle Pacific',
        venue_name: ' Sheraton Seattle ',
        venue_city: 'Seatle, WA, USA',
        start_date:  new Date(2019, 11, 22),
        end_date: new Date(2019, 11, 24),
        website: 'https://pacificmun.com',
        running_since: new Date(2017, 11),
        tags: [
            'International conference',
        ],
        cost: null,
        confirmed: true
    },
]

export default CalendarService