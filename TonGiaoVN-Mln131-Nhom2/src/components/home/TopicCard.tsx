import React from 'react';
import { Link } from 'react-router-dom';
import { type  Topic } from '../../types';
import '../../styles/components/_topicCard.scss'
interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const isPublished = topic.status === 'published';

  return (
    <div className={`topic-card ${!isPublished ? 'topic-card--disabled' : ''}`}>
      <div className="topic-card__image-wrapper">
        <img src={topic.imageUrl} alt={topic.title} className="topic-card__image" />
      </div>
      <div className="topic-card__content">
        <h3 className="topic-card__title">{topic.title}</h3>
        <p className="topic-card__description">{topic.description}</p>
        {isPublished ? (
          <Link to={topic.link} className="topic-card__link">
            Xem chi tiết &rarr;
          </Link>
        ) : (
          <span className="topic-card__coming-soon">Sắp có...</span>
        )}
      </div>
    </div>
  );
};

export default TopicCard;