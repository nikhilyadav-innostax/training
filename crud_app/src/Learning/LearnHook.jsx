import React, { useEffect, useState } from "react";
import axios from "axios";

const LearnHook = () => {
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    const subscription = setupSubscription();

    return() => {
      subscription.unsubscribe()
    }
  }, []);

  const setupSubscription = () => {
    // Simulated subscription
    const fakeSubscription = {
      data: 'Subscription data',
      unsubscribe: () => {
        console.log('Subscription unsubscribed');
      }
    };

    // Simulating an asynchronous setup process
    setTimeout(() => {
      // Setting subscription data after setup completes
      setSubscriptionData(fakeSubscription.data);
    }, 2000);

    return fakeSubscription;
  };

  return (
    <div>
      <h2>Subscription Component</h2>
      {subscriptionData ? (
        <p>Subscription Data: {subscriptionData}</p>
      ) : (
        <p>Loading subscription data...</p>
      )}
    </div>
  );
};

export default LearnHook;
