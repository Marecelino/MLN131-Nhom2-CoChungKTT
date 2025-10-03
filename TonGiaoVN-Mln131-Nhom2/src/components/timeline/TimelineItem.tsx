import React from 'react';
import type  { TimelineEvent } from '../../types';

interface TimelineItemProps {
  event: TimelineEvent;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event }) => {
  const itemClass = `timeline-item timeline-item--${event.side}`;
  const cardColorClass = event.side === 'right' ? 'timeline-card--blue' : 'timeline-card--orange';

  return (
    <div className={itemClass}>
      <div className="timeline-card__wrapper">
        <div className={`timeline-card ${cardColorClass}`}>
          {event.imageUrl && (
            <img src={event.imageUrl} alt={event.title} className="timeline-card__image" />
          )}
          <div className="timeline-card__content">
            <p className="timeline-card__period">{event.period}</p>
            <h4 className="timeline-card__title">{event.title}</h4>
            <p className="timeline-card__description">{event.description}</p>
          </div>
        </div>
      </div>
      <div className="timeline-dot"></div>
    </div>
  );
};

export default TimelineItem;