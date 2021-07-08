
import { ListHeroes } from "../ListHeroes";
import {
    Link
} from "react-router-dom";

function DashBoard() {
    
    const newArr = [...ListHeroes];
    const TopHeroes = newArr.slice(0, 4)

    let element = TopHeroes.map((TopHeroes, index) => {
        return (
                <div className="griditem" key={index} >
                   
                        
                            <h4>
                            <Link to={'details/' + TopHeroes.id} className="link" >
                                {TopHeroes.name}
                                </Link>
                            </h4>
                        
                        
                </div>
        )
    }
    )
    return (
        <div>
            <h3 className="h3">Top Heroes</h3>
            <div className="grid"  >

                {element}
            </div>
            
            <div className="input-group" >
           
                
                <div className="form-group">
                    <label  className="label">Search</label>
                    <div className="col-sm-10">
                        <input type="search" name="" id="input" className="form-control"  title=""/>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default DashBoard;