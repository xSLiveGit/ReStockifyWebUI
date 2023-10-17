import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async (ticker) => {
    try {
      // Define the API endpoint URL
      const apiUrl = `http://127.0.0.1:8080/item/${ticker}`;
  
      // Make a GET request using Axios
      const response = await axios.get(apiUrl);
      console.log("response", response);
  
      // Access the response data
      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData("PEP");
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 4)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

function MyButton({ count1, count2, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count1} and {count2} times
    </button>
  );
}

export default App;
