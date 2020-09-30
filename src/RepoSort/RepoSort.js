import React, { useState } from 'react';

const RepoSort = ({repoResults})=> {
    const [ sortByStars, setSortByStarsState] = useState(false);
    const repos = repoResults.repos

    const starSort = ()=> {
        console.log('hello', repos[0].stars);
        let sorted = []
        for(let i = 0; i < repos.length; i++){
            if(repos[i].stars > repos[i + 1].stars ){
                sorted.push(repos[i]);
            } else if(repos[i].stars < repos[i + 1].stars){
                sorted.unshift(repos[i])
            }
        }
    }

    const handleToggle = () => {
        if(!sortByStars){
            starSort();
            setSortByStarsState(true);
        } else {
            setSortByStarsState(false);
        }
        
    }
    return <div>
        {console.log(repoResults)}
            <input type='checkbox' onChange={handleToggle} name="stars" checked={sortByStars}  />
            <label htmlFor="stars">Sort by Stars</label>
    </div>
}
export default RepoSort;