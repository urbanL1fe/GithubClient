import { useState, useEffect } from 'react';

export default function useGithubListFetcher(user, page) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    `https://api.github.com/users/${user}/repos?sort=updated&type=owner&direction=desc&page=${page}&per_page=10`
  );

  useEffect(() => {
    async function getDataFromApi() {
      
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: 'token 713d68d65422abe4eed50fbf9cd000ddfbbd28fa',
          },
        });
        const dat = await res.json();
        const newData = !Array.isArray(data) || !data.length ? dat : [...data, ...dat];

        setData(newData);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    }
    getDataFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  function doFetch(url) {
    setIsLoading(true);
    setUrl(url);
  }
  return { isLoading, data, doFetch };
}
