import moment from "moment";
import { Moment } from "moment";
import { IApplicationEvent, ICalendarResponse } from "../models/CalendarEvent";


interface dateIndex {
    endMoment: Moment,
    index: number
}

export const sortResponseByEndDate = (response: ICalendarResponse[]): ICalendarResponse[] => {
    let appIndices: dateIndex[] = []
    let sortedAppIndices: dateIndex[] = []
    let sortedApps: ICalendarResponse[] = []

    for (let i: number = 0; i < response.length; i++) {
        let apps: IApplicationEvent[] = response[i].applications ? response[i].applications : []
        if (response[i].applications !== null) { apps = response[i].applications }
        appIndices.push({ endMoment: getLargestEndDate(apps), index: i })
    }

    sortedAppIndices = appIndices.sort((a: dateIndex, b: dateIndex) => {
        let firstDate: Moment = a.endMoment
        let secondDate: Moment = b.endMoment
        return firstDate.isBefore(secondDate) ? -1 : 1
    })

    for (let i: number = 0; i < sortedAppIndices.length; i++) {
        sortedApps.push(response[sortedAppIndices[i].index])
    }

    return sortedApps
}

// apps must not be null
const getLargestEndDate = (apps: IApplicationEvent[]): Moment => {
    if (apps.length === 0) {
        throw new Error('cannot run function on null')
    } else if (apps.length === 1) {
        return moment(apps[0].end_date);
    } else if (apps.length === 2) {
        let firstDate: Moment = moment(apps[0].end_date)
        let secondDate: Moment = moment(apps[0].end_date)
        return firstDate.isBefore(secondDate) ? secondDate : firstDate
    } else {
        // throw new Error('cannot run function on too many apps')

        let dateIndices: dateIndex[] = []
        let sortedDateIndices: dateIndex[] = []
        for (let i: number = 0; i < apps.length; i++) {
            dateIndices.push({ endMoment: moment(apps[i].end_date), index: i })
        }

        sortedDateIndices = dateIndices.sort((a: dateIndex, b: dateIndex) => {
            let firstDate: Moment = a.endMoment
            let secondDate: Moment = b.endMoment
            return firstDate.isBefore(secondDate) ? -1 : 1
        })

        return moment(apps[sortedDateIndices[sortedDateIndices.length - 1].index].end_date)
        // traverse all the apps, save the end-dates and indices in a tuple
        // create a sorted array by index
    }
}