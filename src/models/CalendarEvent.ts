import { Moment } from 'moment'

export interface CalendarEvent {
    conference_id: number,
    short_name: string,
    name_prefix: string,
    venue_name: string,
    venue_city: string,
    start_date: string | null,
    end_date: string | null,
    website: string,
    running_since: string | null,
    tags: string[],
    cost: number | null,
    confirmed: boolean,
}

export default CalendarEvent