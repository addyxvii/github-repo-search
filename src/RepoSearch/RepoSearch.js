import React from 'react';

const RepoSearch = ({ query, setRepoSearchState }) => {
    const textInput = React.createRef();
    return <form>
            <input id='search' type='text' ref={textInput} placeholder='Search' />
            <button onClick={setRepoSearchState(textInput)}>GO</button>
        </form>
};

export default RepoSearch;