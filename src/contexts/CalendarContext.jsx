import {createContext, useContext, useMemo, useState} from "react";
import moment from "moment";
import {v4 as uuidv4} from "uuid";


const CalendarContext = createContext({});
export const useCalendar = () => useContext(CalendarContext);
export const CalendarProvider = ({children}) => {

    const getNewMonthDays = (year, month) => {
        const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth()
        const startOfMonth = moment(`${year}-${month}`, "YYYY-MM").day()
        let daysArray = []
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push({
                dayNumber: i,
                calendarDay: true,
                uuid: uuidv4(),
                date: moment(`${year}-${month}-${i}`, "YYYY-MM-DD").format("MM/DD/YYYY"),
                workouts: {}
            })
        }
        if (startOfMonth > 1) {
            for (let i = 1; i < startOfMonth; i++) {
                daysArray.unshift({
                    calendarDay: false,
                    uuid: uuidv4(),
                })
            }
        }
        let newDaysArray = []
        for (let i = 0; i < daysArray.length; i += 7) {
            const chunk = daysArray.slice(i, i + 7);
            newDaysArray.push(chunk)
        }
        if (newDaysArray[newDaysArray.length - 1].length < 7) {
            for (let i = newDaysArray[newDaysArray.length - 1].length; i < 7; i += 1) {
                newDaysArray[newDaysArray.length - 1].push({
                    calendarDay: false,
                    uuid: uuidv4(),
                })
            }
        }
        return newDaysArray;
    }

    const getNewMonth = (year, month) => {
        const monthMoment = moment(`${year}-${month}`, `YYYY-MM`);
        getNewMonthDays(year, month)
        return ({
            title: `${monthMoment.format("MMMM YYYY")}`,
            uuid: uuidv4(),
            days: getNewMonthDays(year, month),
        });
    }

    const value = {
            getNewMonth
        };
    return (
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    );
};
