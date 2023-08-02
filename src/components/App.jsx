import { useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FEEDBACK_CATEGORY } from 'constants/constants';

const feedback = {};

for (const { key } of FEEDBACK_CATEGORY) {
  feedback[key] = 0;
}

export const App = () => {
  const [feedbackData, setFeedbackData] = useState(feedback);

  const onLeaveFeedback = e => {
    const feedback = e.target.dataset.id;
    setFeedbackData({
      ...feedbackData,
      [feedback]: feedbackData[feedback] + 1,
    });
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackData).reduce(
      (prevVal, currentVal) => prevVal + currentVal,
      0
    );
  };

  const countPositiveFeedbackPercentage = (total, good) => {
    const result = Math.round((good / total) * 100);
    return result ? result : 0;
  };

  return (
    <>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions
          options={FEEDBACK_CATEGORY}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            feedback={feedbackData}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};
