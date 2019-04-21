import { useState, useEffect } from 'react';
import useGithubListFetcher from '../hooks/useGithubListFetcher';
import User from './User';
import Loader from './Loader';
import { debounced } from '../helperFuncs';

const UserList = props => {
  const [page, setPage] = useState(1);

  const { isLoading, data, doFetch } = useGithubListFetcher();

  useEffect(() => {
    const debouncedScroll = debounced(1000, handleScroll);

    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
      setPage(page + 1);
      doFetch(
        `https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=${page}&per_page=10`
      );
    }
  }

  if (!data) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <ul className="userList">
        {Object.keys(data).map(user => {
          const myUser = data[user];
          const { id, avatar_url, name, login, location, public_repos, public_gists, followers, following } = myUser;
          return (
            <User
              key={login}
              url={avatar_url}
              name={name}
              login={login}
              location={location && location.length > 100 ? `Troll Location` : location}
              repos={public_repos}
              gists={public_gists}
              followers={followers}
              following={following}
            />
          );
        })}
      </ul>
      {isLoading ? <Loader /> : ``}
    </React.Fragment>
  );
};

export default UserList;
