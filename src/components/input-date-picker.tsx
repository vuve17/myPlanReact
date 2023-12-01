import React from "react";
import DatePicker from 'react-datepicker';
import { useState, useEffect } from "react";
import 'c:/zavrsni_rad_Vedran_Vujnovic/myplan/node_modules/react-datepicker/dist/react-datepicker.css'

interface DatePickerInputProps {
  value?: string|Date,
  name?: string,
  onChange: (value: Date) => void,
  // onChange: (e: React.ChangeEvent<any>) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ value, onChange }) => {
    const [startDate, setStartDate] = useState(value ? new Date(value) : new Date());



    useEffect(() => {
      if (value) {
          setStartDate(new Date(value));
      }
    }, [value]);
    
    const  handleDateChange = (date: Date) => {
      if(date){
        setStartDate(date);
        console.log(date)
        value = date
        onChange && onChange(date)
        
        // let value: string|Date = date.toLocaleDateString('en-US', {
        //   year: 'numeric',
        //   month: '2-digit',
        //   day: '2-digit',
        // }).split('/').join('/');

        
        // console.log(value)
        // console.log(typeof(value))
        // let newValue: Date = new Date(value)
        // console.log(newValue)
        // console.log(onChange)



      }
    };

    return (
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date: Date) => handleDateChange(date)}
        // customInput={}
      />
    );
}

export default DatePickerInput