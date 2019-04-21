import { useState, useEffect } from 'react';
import Repo from '../components/Repo';
import Loader from '../components/Loader';
import useGithubReposFetcher from '../hooks/useGithubReposFetcher';
import {debounced} from '../helperFuncs';

const ReposList = props => {
  const {user} =  props;  
  const [page, setPage] = useState(1);
  
  const { isLoading, data, doFetch } = useGithubReposFetcher(user, page);
  

  useEffect(() => {
    const debouncedScroll = debounced(600,handleScroll);

    function getUserParentScroll(user) {
     const ourUser =  document.getElementById(user);
      if(ourUser){
       ourUser.parentNode.addEventListener('scroll', debouncedScroll);
      }
    }

   getUserParentScroll(user);
    return () => document.getElementById(user).parentNode.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);

  function handleScroll(e) {
    //if( e.target.offsetHeight + e.target.scrollTop !== e.target.scrollHeight) return;
    if (e.target.scrollTop >= (e.target.scrollHeight - e.target.offsetHeight)){
    console.log('bottom');
    setPage(page + 1);
    doFetch(`https://api.github.com/users/${user}/repos?sort=updated&type=owner&direction=desc&page=${page}&per_page=10`);
    console.log(page);
    console.log(user);
    }
  }
    
  if (!data) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <ul id={user} className="repoList">
        {Object.keys(data).map(repo => {
          const myRepo = data[repo];
          const { license, id, full_name, description, stargazers_count, watchers_count, forks_count } = myRepo;
          return (
            <Repo
              key={id}
              id={id}
              name={full_name}
              description={description || `No Desciption`}
              license={license && license.name ? license.name : `No License`}
              stars={stargazers_count || `0`}
              watchers={watchers_count || `0`}
              forks={forks_count || `0`}
            />
          );
        })}
        {isLoading ? <Loader/> : ``}  
      </ul>
      </React.Fragment>
  );
}

export default ReposList;