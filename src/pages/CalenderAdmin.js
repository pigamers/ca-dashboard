import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../components/Calender";
import cn from "../components/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import NavbarUser from "../components/NavbarUser"


export default function Calendar() {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    return (
        <div className="bg-gray-200 min-h-screen">
            <NavbarUser />
            <div className="flex flex-col lg:flex-row px-10 justify-center gap-10 items-center py-24">
                <div className="w-full lg:w-1/3 bg-white p-5">
                    <h1 className=" font-semibold">
                        Schedule for {selectDate.toDate().toDateString()}
                    </h1>
                    <p className="text-gray-400">No meetings for today.</p>
                </div>
                <div className="">
                    <div className="flex flex-row justify-around gap-60 items-center">
                        <h1 className="text-xl font-bold py-5">
                            {months[today.month()]}, {today.year()}
                        </h1>
                        <div className="flex flex-row justify-center gap-5 items-center">
                            <GrFormPrevious
                                className="h-8 w-8"
                                onClick={() => {
                                    setToday(today.month(today.month() - 1));
                                }}
                            />
                            <h1
                                className="text-xl font-bold"
                                onClick={() => {
                                    setToday(currentDate);
                                }}
                            >
                                Today
                            </h1>
                            <GrFormNext
                                className="h-8 w-8"
                                onClick={() => {
                                    setToday(today.month(today.month() + 1));
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly py-5 gap-12">
                        {days.map((day, index) => {
                            return (
                                <h1
                                    key={index}
                                    className="text-xl font-bold"
                                >
                                    {day}
                                </h1>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-7">
                        {generateDate(today.month(), today.year()).map(
                            ({ date, currentMonth, today }, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="bg-white w-full lg:p-10"
                                    >
                                        <h1
                                            className={cn(
                                                currentMonth ? "" : "text-gray-400",
                                                today
                                                    ? "bg-[#3C37FF] text-white"
                                                    : "",
                                                selectDate
                                                    .toDate()
                                                    .toDateString() ===
                                                    date.toDate().toDateString()
                                                    ? "bg-[#3C37FF] text-white"
                                                    : "",
                                                "h-10 w-10 grid place-content-center hover:bg-[#3C37FF] hover:text-white transition-all cursor-pointer select-none"
                                            )}
                                            onClick={() => {
                                                setSelectDate(date);
                                            }}
                                        >
                                            {date.date()}
                                        </h1>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}