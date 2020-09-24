import React from 'react';
import './App.css';

import RepoSearch from '../RepoSearch/RepoSearch';
import RepoList from '../RepoList/RepoList';

function App() {
//   inputHandler = (event) => {

//   }
  return (
    <main className="App">
     <section className="RepoSearch">
       <RepoSearch query="Search" />
     </section>
     <section className="RepoList">
       <RepoList  />
     </section> 
    </main>
  );
}

export default App;
