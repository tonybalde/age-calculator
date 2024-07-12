/* import React, { useState } from "react";
import "./styles/App.css";
import arrow from "./assets/images/icon-arrow.svg";

const App: React.FC = () => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [isDayValid, setIsDayValid] = useState<boolean>(true);
  const [isMonthValid, setIsMonthValid] = useState<boolean>(true);
  const [isYearValid, setIsYearValid] = useState<boolean>(true);
  const [calculatedYears, setCalculatedYears] = useState<number | null>(null);
  const [calculatedMonths, setCalculatedMonths] = useState<number | null>(null);
  const [calculatedDays, setCalculatedDays] = useState<number | null>(null);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Los meses en JavaScript son de 0 a 11
  const currentDay = new Date().getDate();

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getMaxDays = (month: number, year: number) => {
    if (month === 2) {
      return isLeapYear(year) ? 29 : 28;
    }
    if ([4, 6, 9, 11].includes(month)) {
      return 30;
    }
    return 31;
  };

  const validateDay = (value: string) => {
    if (value === "" || month === "" || year === "") {
      setIsDayValid(true);
      return;
    }
    const dayNumber = Number(value);
    const monthNumber = Number(month);
    const yearNumber = Number(year);
    const maxDays = getMaxDays(monthNumber, yearNumber);
    if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= maxDays) {
      setIsDayValid(true);
    } else {
      setIsDayValid(false);
    }
  };

  const validateMonth = (value: string) => {
    if (value === "") {
      setIsMonthValid(true);
      return;
    }
    const monthNumber = Number(value);
    if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
      setIsMonthValid(true);
    } else {
      setIsMonthValid(false);
    }
  };

  const validateYear = (value: string) => {
    if (value === "") {
      setIsYearValid(true);
      return;
    }
    const yearNumber = Number(value);
    if (!isNaN(yearNumber) && yearNumber <= currentYear - 1) {
      setIsYearValid(true);
    } else {
      setIsYearValid(false);
    }
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDay(value);
    validateDay(value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMonth(value);
    validateMonth(value);
    if (day !== "" && year !== "") {
      validateDay(day);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYear(value);
    validateYear(value);
    if (day !== "" && month !== "") {
      validateDay(day);
    }
  };

  const calculateAge = () => {
    if (!isDayValid || !isMonthValid || !isYearValid) {
      return;
    }
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += getMaxDays(today.getMonth(), today.getFullYear());
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setCalculatedYears(ageYears);
    setCalculatedMonths(ageMonths);
    setCalculatedDays(ageDays);
  };

  return (
    <>
      <div className="main-container">
        <div className="numbers-container">
          <div className="day-container">
            <h1 className={`title-input ${!isDayValid && day !== "" ? "title-error" : ""}`}>D A Y</h1>
            <input
              className={`day-number input-field ${!isDayValid ? "input-error" : ""}`}
              value={day}
              onChange={handleDayChange}
              placeholder="DD"
            />
            {!isDayValid && day !== "" && <span className="error-message">Must be a valid day</span>}
          </div>
          <div className="month-container">
            <h1 className={`title-input ${!isMonthValid && month !== "" ? "title-error" : ""}`}>M O N T H</h1>
            <input
              className={`month-number input-field ${!isMonthValid ? "input-error" : ""}`}
              value={month}
              onChange={handleMonthChange}
              placeholder="MM"
            />
            {!isMonthValid && month !== "" && <span className="error-message">Must be a valid month</span>}
          </div>
          <div className="year-container">
            <h1 className={`title-input ${!isYearValid && year !== "" ? "title-error" : ""}`}>Y E A R</h1>
            <input
              className={`year-number input-field ${!isYearValid ? "input-error" : ""}`}
              value={year}
              onChange={handleYearChange}
              placeholder="YYYY"
            />
            {!isYearValid && year !== "" && <span className="error-message">Must be a valid year</span>}
          </div>
        </div>
        <div className="arrow-container" onClick={calculateAge}>
          <img src={arrow} className="arrow" alt="arrow"/>
        </div>
        <div className="calculations-container">
          <h1 className="calculations-text">
            <span className="dashes">{calculatedYears !== null ? calculatedYears : "--"}</span> Years
          </h1>
          <h1 className="calculations-text">
            <span className="dashes">{calculatedMonths !== null ? calculatedMonths : "--"}</span> Months
          </h1>
          <h1 className="calculations-text">
            <span className="dashes">{calculatedDays !== null ? calculatedDays : "--"}</span> Days
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
 */

import React, { useState, useEffect } from "react";
import "./styles/App.css";
import arrow from "./assets/images/icon-arrow.svg";

const App: React.FC = () => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [isDayValid, setIsDayValid] = useState<boolean>(true);
  const [isMonthValid, setIsMonthValid] = useState<boolean>(true);
  const [isYearValid, setIsYearValid] = useState<boolean>(true);
  const [calculatedYears, setCalculatedYears] = useState<number | null>(null);
  const [calculatedMonths, setCalculatedMonths] = useState<number | null>(null);
  const [calculatedDays, setCalculatedDays] = useState<number | null>(null);
  const [isCalculateEnabled, setIsCalculateEnabled] = useState<boolean>(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const allInputsValid =
      day !== "" && month !== "" && year !== "" && isDayValid && isMonthValid && isYearValid;
    setIsCalculateEnabled(allInputsValid);
  }, [day, month, year, isDayValid, isMonthValid, isYearValid]);

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getMaxDays = (month: number, year: number) => {
    if (month === 2) {
      return isLeapYear(year) ? 29 : 28;
    }
    if ([4, 6, 9, 11].includes(month)) {
      return 30;
    }
    return 31;
  };

  const validateDay = (value: string) => {
    if (value === "" || month === "" || year === "") {
      setIsDayValid(true);
      return;
    }
    const dayNumber = Number(value);
    const monthNumber = Number(month);
    const yearNumber = Number(year);
    const maxDays = getMaxDays(monthNumber, yearNumber);
    if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= maxDays) {
      setIsDayValid(true);
    } else {
      setIsDayValid(false);
    }
  };

  const validateMonth = (value: string) => {
    if (value === "") {
      setIsMonthValid(true);
      return;
    }
    const monthNumber = Number(value);
    if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
      setIsMonthValid(true);
    } else {
      setIsMonthValid(false);
    }
  };

  const validateYear = (value: string) => {
    if (value === "") {
      setIsYearValid(true);
      return;
    }
    const yearNumber = Number(value);
    if (!isNaN(yearNumber) && yearNumber <= currentYear - 1) {
      setIsYearValid(true);
    } else {
      setIsYearValid(false);
    }
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDay(value);
    validateDay(value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMonth(value);
    validateMonth(value);
    if (day !== "" && year !== "") {
      validateDay(day);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYear(value);
    validateYear(value);
    if (day !== "" && month !== "") {
      validateDay(day);
    }
  };

  const calculateAge = () => {
    if (!isDayValid || !isMonthValid || !isYearValid) {
      return;
    }
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += getMaxDays(today.getMonth() + 1, today.getFullYear());
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setCalculatedYears(ageYears);
    setCalculatedMonths(ageMonths);
    setCalculatedDays(ageDays);
  };

  return (
    <>
      <div className="main-container">
        <div className="numbers-container">
          <div className="day-container">
            <h1 className={`title-input ${!isDayValid && day !== "" ? "title-error" : ""}`}>D A Y</h1>
            <input
              className={`day-number input-field ${!isDayValid ? "input-error" : ""}`}
              value={day}
              onChange={handleDayChange}
              placeholder="DD"
            />
            {!isDayValid && day !== "" && <span className="error-message">Must be a valid day</span>}
          </div>
          <div className="month-container">
            <h1 className={`title-input ${!isMonthValid && month !== "" ? "title-error" : ""}`}>M O N T H</h1>
            <input
              className={`month-number input-field ${!isMonthValid ? "input-error" : ""}`}
              value={month}
              onChange={handleMonthChange}
              placeholder="MM"
            />
            {!isMonthValid && month !== "" && <span className="error-message">Must be a valid month</span>}
          </div>
          <div className="year-container">
            <h1 className={`title-input ${!isYearValid && year !== "" ? "title-error" : ""}`}>Y E A R</h1>
            <input
              className={`year-number input-field ${!isYearValid ? "input-error" : ""}`}
              value={year}
              onChange={handleYearChange}
              placeholder="YYYY"
            />
            {!isYearValid && year !== "" && <span className="error-message">Must be a valid year</span>}
          </div>
        </div>
        <div className="arrow-container" onClick={isCalculateEnabled ? calculateAge : undefined}>
          <img
            src={arrow}
            className={`arrow ${isCalculateEnabled ? "" : "arrow-disabled"}`}
            alt="arrow"
          />
        </div>
        <div className="calculations-container">
          <h1 className="calculations-text">
            <span className="dashes">{calculatedYears !== null ? calculatedYears : "--"}</span> Years
          </h1>
          <h1 className="calculations-text">
            <span className="dashes">{calculatedMonths !== null ? calculatedMonths : "--"}</span> Months
          </h1>
          <h1 className="calculations-text">
            <span className="dashes">{calculatedDays !== null ? calculatedDays : "--"}</span> Days
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
