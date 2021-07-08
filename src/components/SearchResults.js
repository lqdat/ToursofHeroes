import { ListHeroes } from "../ListHeroes";
import { useState } from "react";
function SearchResults() {
    const [heroes, setHeroes] = useState([...ListHeroes]);
    const _heroes = [...ListHeroes]; 
    const handleSearch = (value) => {
        const str = value.toLowerCase(); 
        const results = _heroes.filter(f => f.name.toLowerCase().includes(str)) 
        console.log(results)
        if (str) return
        setHeroes(results)
        setHeroes(_heroes)
    }
    return (



        <div className="input-group" >
            <div className="form-group">
                <label className="label">Search Heroes</label>
                <input type="search" className="input"
                    onChange={(e) => handleSearch(e.target.value)} />
                <div>
                    {
                         heroes.map(hero  =>
                            <div className="search-result" key={hero.id}>
                                {hero.name}
                                {console.log(hero.name)}
                            </div>
                    
                    )}
                </div>
            </div>
        </div>



    )
}
export default SearchResults;