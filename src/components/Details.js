import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { ListHeroes } from "../ListHeroes";
import { useState } from "react";


function Details() {

    
    let { id } = useParams();
    
    
    var i = ListHeroes.find(hero => hero.id.toString() === id);
        
    
   
    const [Name,setName]=useState(i.name);
    const onHeroNameChange =(e)=>{
        const value =e.target.value
        
        if(value){
            setName(value);
        }
    }
    const handleSave = () =>{
        var rs = ListHeroes.findIndex(hero => hero.id.toString() === id)
        
        var rs1={id: i.id, name: Name}
        
        ListHeroes.fill((rs1), rs, rs+1)
        alert('Đã cập nhật Hero :' + Name)
       

        
        
     
     }
    return (
        
        <div>
            
            
                
          
            
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" >
                <div className="caption">
                    <h3> Detail: {Name}</h3>

                    
                    <span>
                    <label  className="col-sm-2 control-label">Id : {i.id}</label>

                    <label  className="col-sm-2 control-label">Name : {Name}</label>
                    </span>
                    <br/>
                    <div className="input-group">

                        <input  placeholder ={Name}  className="form-control"  onInput={(e) => onHeroNameChange(e)} />
                    
                    <button type="button" className="btn">
                        <Link to="/dashboard">Back</Link>
                    </button>


                    <button type="button" className="btn " onClick={handleSave}>
                        Save
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>

    )

}
export default Details;