
import React from 'react';
import type { TimelineEvent } from '../../types';
import TimelineItem from './TimelineItem';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} />
      ))}
    </div>
  );
};

export default Timeline;