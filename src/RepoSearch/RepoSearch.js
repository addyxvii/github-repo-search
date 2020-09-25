import React from 'react';

const RepoSearch = ({ query, setRepoSearchState }) => {
    return <input onChange={(event) => {
        event.preventDefault();
        setRepoSearchState(event.target.value)
    }} type='text' placeholder='Search' />;
};

export default RepoSearch;