import PropTypes from 'prop-types';

export const Statistics = ({ feedback, total, positivePercentage }) => {
  return (
    <>
      {Object.keys(feedback).map((key, index) => {
        return (
          <p key={index}>
            {key}: {feedback[key]}
          </p>
        );
      })}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage(total, feedback.good)}%</p>
    </>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape().isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
