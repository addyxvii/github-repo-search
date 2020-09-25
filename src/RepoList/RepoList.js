import React from 'react';
import { Link } from 'react-router-dom';

const RepoList = ({ query, repoResults, setSelectedRepo }) => {
    return <div>
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