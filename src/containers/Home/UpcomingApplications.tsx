import React from 'react'
import { ICalendarResponse } from '../../models/CalendarEvent'

interface IUpcomingApplicationsState {
    upcomingApplications: ICalendarResponse[],
    loading: boolean
}

class UpcomingApplications extends React.Component<{},IUpcomingApplicationsState> {
    state: IUpcomingApplicationsState = {
        upcomingApplications: [],
        loading: true
    }

    render() {
        return (<div>
            <p>hello world</p>
        </div>)
    }
}