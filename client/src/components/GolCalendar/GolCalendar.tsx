import { FC } from "react";
import DatePicker from "react-datepicker2";

export interface IGolCalendarProps {
  value?: any;
  onChange: any;
  isGregorian?: boolean;
  showTodayButton?: boolean;
  timePicker?: boolean;
  enabledRange?: { min: any; max: any };
  disabledRanges?: any;
  className?: string
}

const GolCalendar: FC<IGolCalendarProps> = ({
  value,
  onChange,
  isGregorian,
  showTodayButton,
  timePicker,
  enabledRange,
  disabledRanges,
  className
}) => {
  return (
    <div>
      <DatePicker
        value={value}
        className={className}
        onChange={onChange}
        isGregorian={isGregorian}
        timePicker={timePicker}
        min={enabledRange?.min}
        max={enabledRange?.max}
        ranges={disabledRanges}
      />
    </div>
  );
};

export default GolCalendar;
