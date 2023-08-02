import { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FEEDBACK_CATEGORY } from 'constants/constants';

const feedback = {};

for (const key in FEEDBACK_CATEGORY) {
  feedback[key] = 0;
}

export class App extends Component {
  state = { ...feedback };

  onLeaveFeedback = e => {
    const feedback = e.target.textContent;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (prevVal, currentVal) => prevVal + currentVal,
      0
    );
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const result = Math.round((good / total) * 100);
    return result ? result : 0;
  };

  render() {
    return (
      <div className="wrapper">
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions
            options={FEEDBACK_CATEGORY}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              feedback={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
