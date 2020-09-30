import React, { useState } from 'react';
import Datasort from 'react-data-sort'

const RepoSort = ({repoResults})=> {
    const [ sortByStars, setSortByStarsState] = useState(false);
    const repos = repoResults.repos

    // const starSort = ()=> {
    //     console.log('hello', repos[0].stars);
    //     let sorted = []
    //     for(let i = 0; i < repos.length -1; i++){
    //         if(repos[i].stars > repos[i + 1].stars ){
    //             sorted.push(repos[i]);
    //         } else if(repos[i].stars < repos[i + 1].stars){
    //             sorted.unshift(repos[i])
    //         }
    //     }
    //     console.log(sorted)
    // }

    const handleToggle = () => {
        if(!sortByStars){
            // starSort();
            setSortByStarsState(true);
        } else {
            setSortByStarsState(false);
        }
        
    }
    return <div>
            <input type='checkbox' onChange={handleToggle} name="stars" checked={sortByStars}  />
            {console.log(repos)}
            <label htmlFor="stars">Sort by Stars</label>
            {sortByStars ?
                 <Datasort
                 data={repos}
                 render={({ data, sortBy, setSortBy, direction, toggleDirection }) => (
                     <table>
                     <thead 
                     setSortBy={setSortBy}
                     sortBy={sortBy}
                     direction={direction}
                     toggleDirection={toggleDirection}>
                         <tr>
                         <td>Stars</td>
                         <td>Name</td>
                         </tr>
                     </thead>
                     <tbody>
                         {data.map(({ description, stars, name }) => (
                         <tr key={description}>
                             <td>{stars}</td>
                             <td>{name}</td>
                         </tr>
                         ))}
                     </tbody>
                     </table>
                 )}
                 />  
             : null }   
            </div>
}
export default RepoSort;