import { ReactComponent as JustifyIcon } from 'assets/images/icons/UI/Justify.svg';
import GolCheckbox from "components/GolCheckbox";
import { XYCoord } from "dnd-core";
import React, { FC, useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";

interface CardProps {
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    className?: string;
    column: any;
    index: number;
  }
  
  interface DragItem {
    index: number;
    id: string;
    type: string;
  }
  

const GolColumnChooserCard: FC<CardProps> = ({ moveCard, className, column, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ handlerId }, drop] = useDrop({
      accept: 'card',
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        };
      },
      hover(item: DragItem, monitor: DropTargetMonitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
  
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return;
        }
  
        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
  
        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
  
        // Get pixels to the top
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
  
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
  
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
  
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
  
        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex);
  
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      },
    });
  
    const [{ isDragging }, drag] = useDrag({
      type: 'card',
      item: () => {
        return { id: column.id, index };
      },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    drag(drop(ref));
    const opacity = isDragging ? 0.2 : 1
  
    return (
      <div style={{ opacity }} data-handler-id={handlerId} className={className} ref={ref} key={column.id}>
        <GolCheckbox
          // containerClassName={className}
          label={column.Header}
          size="small"
          {...column.getToggleHiddenProps()}
        />
        <JustifyIcon />
      </div>
    );
  };

  export default GolColumnChooserCard
