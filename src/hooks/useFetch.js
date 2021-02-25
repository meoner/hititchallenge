import axios from 'react-native-axios';
import {useState} from 'react';

export function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetch(url) {
    setLoading(true);
    try {
      const {data: serverData} = await axios.get(url);

      setData(serverData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return {data, error, loading, fetch};
}
