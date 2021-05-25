import {
  Accordion,

  AccordionDetails, AccordionSummary
} from '@material-ui/core'
import { ReactComponent as ArrowIcon } from 'assets/images/icons/Arrows/small/down.svg'
import GolCheckbox from 'components/GolCheckbox'
import React, { FC } from 'react'
import useStyle from './GolExpansion.style'

export interface IGolExpansion {
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  square?: boolean;
  children?: React.ReactNode;
  summary?: React.ReactNode;
  checkable?: boolean;
  checked?: boolean;
  hasSpacing?: boolean;
  onCheckboxChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void
  onChange?(event: React.ChangeEvent<object>, expanded: boolean): void
  className?: string
}

const GolExpansion: FC<IGolExpansion> = ({
  children,
  defaultExpanded,
  disabled,
  expanded,
  summary,
  square,
  onChange,
  onCheckboxChange,
  checkable,
  checked,
  hasSpacing,
  className
}) => {
  const classes = useStyle({ hasSpacing });

  return (
    <Accordion
      {...{
        classes,
        className,
        defaultExpanded,
        disabled,
        expanded,
        square,
        onChange,
      }}
    >
      <AccordionSummary expandIcon={<ArrowIcon />}>
        {checkable ? (
          <GolCheckbox
            {...{ checked, onChange: onCheckboxChange, label: summary }}
          />
        ) : (
          summary
        )}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default GolExpansion;
