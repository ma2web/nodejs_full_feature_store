import React, { FC } from "react";
import DatePicker from "react-datepicker2";

export interface IGolCalendarProps {
  value: any;
  onChange: any;
  isGregorian?: boolean;
  showTodayButton?: boolean;
  timePicker?: boolean;
  enabledRange?: { min: any; max: any };
  disabledRanges?: any;
}

const Component: FC<IGolCalendarProps> = ({
  value,
  onChange,
  isGregorian,
  showTodayButton,
  timePicker,
  enabledRange,
  disabledRanges,
}) => {
  return (
    <div>
      <DatePicker
        // value={value}
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

const argTypes = {
  value: { control: "string", defaultValue: "defaultValue" },
  isGregorian: { control: "boolean", defaultValue: true },
  showTodayButton: { control: "boolean", defaultValue: true },
  timePicker: { control: "boolean", defaultValue: true },
  onChange: { action: "onDataChange" },
};

export const GolCalendar = Component.bind({});

export default {
  component: GolCalendar,
  title: "Calendar",
  argTypes,
};
