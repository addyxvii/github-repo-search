import React, { useState } from 'react';

const RepoSort = ()=> {
    const [ sortByStars, setSortByStarsState] = useState(false);

    const handleToggle = (e) => {
        if(!sortByStars){
            setSortByStarsState(true);
        } else {
            setSortByStarsState(false);
        }
        
    }
    return <div>
            <input type='checkbox' onChange={handleToggle} name="stars" checked={sortByStars} />
            <label htmlFor="stars">Sort by Stars</label>
    </div>
}
export default RepoSort;