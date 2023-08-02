import PropTypes from 'prop-types';

import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.category__list}>
      {options.map((category, index) => {
        return (
          <li key={index}>
            <button
              className={css.button}
              data-id={category.key}
              onClick={onLeaveFeedback}
              type="button"
            >
              {category.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
