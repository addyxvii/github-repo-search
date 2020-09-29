import React from 'react';

const props = {
    sortByStars : false,
};

const handleToggle = (e) => {
    if(!props.sortByStars){
        props.sortByStars = true;
        console.log(props);
    } else {
        props.sortByStars = false;
        console.log(props);
    }
    
}

const RepoSort = ()=> {
    return <div>
            <input type='checkbox' onClick={handleToggle} name="stars" />
            <label htmlFor="stars">Sort by Stars</label>
    </div>
}
export default RepoSort;