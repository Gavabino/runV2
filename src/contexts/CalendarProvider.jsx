import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { CalendarContext } from "./CalendarContext";

const CalendarProvider = ({ children }) => {
    const [calendarDate, setCalendarDate] = useState({
        month: moment().month() + 1,
        year: moment().year(),
    });

    const { month: currentMonth, year: currentYear } = calendarDate;

    const getNewMonthDays = (year, month) => {
        const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
        const startOfMonth = moment(`${year}-${month}`, "YYYY-MM").day();
        let daysArray = [];

        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push({
                dayNumber: i,
                calendarDay: true,
                uuid: uuidv4(),
                date: moment(`${year}-${month}-${i}`, "YYYY-MM-DD").format("MM/DD/YYYY"),
                workouts: {},
            });
        }

        if (startOfMonth > 1) {
            for (let i = 1; i < startOfMonth; i++) {
                daysArray.unshift({
                    calendarDay: false,
                    uuid: uuidv4(),
                });
            }
        }

        const newDaysArray = [];
        for (let i = 0; i < daysArray.length; i += 7) {
            newDaysArray.push(daysArray.slice(i, i + 7));
        }

        while (newDaysArray[newDaysArray.length - 1].length < 7) {
            newDaysArray[newDaysArray.length - 1].push({
                calendarDay: false,
                uuid: uuidv4(),
            });
        }

        return newDaysArray;
    };

    const getNewMonth = () => {
        const monthMoment = moment(`${currentYear}-${currentMonth}`, "YYYY-MM");
        return {
            title: monthMoment.format("MMMM YYYY"),
            uuid: uuidv4(),
            days: getNewMonthDays(currentYear, currentMonth),
        };
    };

    const increaseMonth = () => {
        setCalendarDate(prev => {
            if (prev.month === 12) {
                return { month: 1, year: prev.year + 1 };
            }
            return { ...prev, month: prev.month + 1 };
        });
    };

    const decreaseMonth = () => {
        setCalendarDate(prev => {
            if (prev.month === 1) {
                return { month: 12, year: prev.year - 1 };
            }
            return { ...prev, month: prev.month - 1 };
        });
    };

    const value = {
        getNewMonth,
        currentMonth,
        currentYear,
        increaseMonth,
        decreaseMonth,
    };

    return (
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    );
};

export default CalendarProvider;