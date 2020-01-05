import { Moment } from "moment";

// CC v1
export interface CalendarEvent {
  conference_id: number;
  short_name: string;
  name_prefix: string;
  venue_name: string;
  venue_city: string;
  start_date: Date | null;
  end_date: Date | null;
  website: string;
  running_since: Date | null;
  tags: string[];
  cost: number | null;
  confirmed: boolean;
}

// CC v2
export interface ConferenceEvent {
  short_name: string;
  full_name: string;
  venue_name: string;
  venue_city: string;
  website: string;
  start_date: Date | null;
  end_date: Date | null;
  running_since: Date | null;
  tags: string[];
  events: ApplicationEvent[]
}

export interface ApplicationEvent {
  name: string
  type: ApplicationType
  start_date: Date
  end_date: Date
  dates_tentative: boolean
  cost:number | null
}

export enum ApplicationType {
  Delegate = "DELEGATE REGISTRATION",
  School = "SCHOOL REGISTRATION",
  Staff = "STAFF APPLICATION",
  Secretariat = "SECRETARIAT APPLICATION",
  Volunteer = "VOLUNTEER APPLICATION",
  Other = "OTHER"
}

// export default CalendarEvent;