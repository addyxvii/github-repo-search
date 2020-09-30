import React from 'react';
import { Link } from 'react-router-dom';
import './RepoList.css';


const RepoList = ({ query, repoResults, setSelectedRepo }) => {
    return <div>
        {console.log(repoResults, "THIS IS COMING FROM THE REPO LIST YOU DUMMY")}
        <ul>
            {repoResults && repoResults.repos ? repoResults.repos.map((repo, index) => {
                return (<li onClick={() => setSelectedRepo(repo)} key={index}>
                    <Link to={{ pathname: `/home/repo/${repo.name}` }}>{repo.name} </Link>
                </li>)
            }) : null}
        </ul>
        <p>You Searched : {query} </p>
    </div>;
};

export default RepoList;