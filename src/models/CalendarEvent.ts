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
export interface ICalendarResponse {
  organization: IConferenceOrganization,
  event: IConferenceEvent | null,
  applications: IApplicationEvent[] | null
}

export interface IConferenceOrganization {
  short_name: string;
  full_name: string;
  organization_type: string;
  website: string;
  running_since: Date | null
}

export enum IOrganizationType {
  nonProfit = "Registered non profit",
  schoolSponsored = "School Sponsored",
  studentProject = "Student Project"
}

export interface IConferenceEvent {
  venue_name: string;
  venue_city: string;
  start_date: Date | null;
  end_date: Date | null;
  dates_tentative: boolean
  tags: string[];
}

export interface IApplicationEvent {
  name: string
  type: IApplicationType
  start_date: Date
  end_date: Date
  dates_tentative: boolean
  cost:number | null
}

export enum IApplicationType {
  Delegate = "DELEGATE REGISTRATION",
  School = "SCHOOL REGISTRATION",
  Staff = "STAFF APPLICATION",
  Secretariat = "SECRETARIAT APPLICATION",
  Volunteer = "VOLUNTEER APPLICATION",
  Other = "OTHER"
}

// export default CalendarEvent;