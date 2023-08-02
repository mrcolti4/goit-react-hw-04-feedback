import PropTypes from 'prop-types';

import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.category__list}>
      {Object.values(options).map((category, index) => {
        return (
          <li key={index}>
            <button
              className={css.button}
              key={index}
              onClick={onLeaveFeedback}
              type="button"
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
