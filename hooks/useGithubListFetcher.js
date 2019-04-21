import { useState, useEffect } from 'react';

export default function useGithubListFetcher() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    `https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=1&per_page=10`
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
        const dataPerUser = dat.items.map(async user => {
          const userData = await getUserData(user.login);
          return userData;
        });
        const dataToReturn = await Promise.all(dataPerUser).then(completed => completed);
        console.log(dataToReturn);
        const newData = !Array.isArray(data) || !data.length ? dataToReturn : [...data, ...dataToReturn];
        setData(newData);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    }

    async function getUserData(login) {
      const res = await fetch(`https://api.github.com/users/${login}`, {
        method: 'GET',
        headers: {
          Authorization: 'token 713d68d65422abe4eed50fbf9cd000ddfbbd28fa',
        },
      });
      const data = await res.json();

      return data;
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
