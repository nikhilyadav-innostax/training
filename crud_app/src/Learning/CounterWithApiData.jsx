import React, { useState, useEffect } from 'react';

const CounterWithApiData = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("render")
    // Fetch data from an API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, on mount

  const increment = () => {
    setCount(count + 1); // Increment the count state
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <hr />
      {data ? (
        <div>
          <h2>API Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CounterWithApiData;