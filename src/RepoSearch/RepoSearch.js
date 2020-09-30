import React from 'react';

const RepoSearch = ({ setRepoSearchState }) => {
    const textInput = React.createRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      setRepoSearchState(textInput.current.value);
    }
    return <form onSubmit={handleSubmit}>
            <input id='search' type='text' ref={textInput} placeholder='Search' />
            <button type="submit">GO</button>
        </form>
};

export default RepoSearch;