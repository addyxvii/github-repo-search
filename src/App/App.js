import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import RepoSearch from '../RepoSearch/RepoSearch';
import RepoList from '../RepoList/RepoList';
import RepoSort from '../RepoSort/RepoSort';

const useRepoSearch = (query)=> {
  const [repoResults, setRepoResults] = useState('');

  useEffect(() => {
    if(query && !repoResults){
      fetch(`https://repo-review-api.herokuapp.com/search/github/repos/${query}`).then(response => {
        return response.json().then(data => {
          setRepoResults(data.data);
        })
      })
    }
  }, [query, repoResults])

  // const useRepoSort = ()=> {
  //   console.log(props.sortByStars);
  // //   const [ sortByStars, setSortByStars ] = useState();
  // //   if (props.sortByStars) {
  // //     const sortedByStars = repoResults.data.data.repos[i].stars
  // //     setRepoResults(sortedByStars)
  //   }
  // }


  return {repoResults, setRepoResults};
}

function App() {
  const [repoSearchState, setRepoSearchState] = useState();
    const {repoResults} = useRepoSearch(repoSearchState);
    const [selectedRepo, setSelectedRepo] = useState();
  return (
    <main className="App">

      <Link to={{pathname:'/home'}}>
        Home
      </Link>
      <Route 
      exact={true} 
      path='/home'
      component={() => (
        <>
        <section className="RepoSearch">
          <RepoSearch query={repoSearchState} setRepoSearchState={setRepoSearchState} />
          <section className="RepoSort">
            <RepoSort repoResults={repoResults}/>
          </section>
        </section>
        <section className="RepoList">
          <RepoList query={ repoSearchState } repoResults={repoResults} setSelectedRepo={setSelectedRepo}  />
          {console.log(repoResults)}
        </section>

        </>
      )}
      />
      <Route
      exact={true}
      path='/home/repo/:name'
      component={() => (
        <>
          <div>
      <h3>{selectedRepo.name}</h3>
      <p>{selectedRepo.description}</p>
          </div>
        </>
      )}
      />
    </main>
  );
}

export default App;
