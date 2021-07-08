
import { ListHeroes } from "../ListHeroes";
import { Link } from "react-router-dom";
import { useState } from "react";
import './style.css'


function HeroesList() {


    const [list, setLish] = useState(ListHeroes);
    

    let element = ListHeroes.map((newArr, index) => {
        return (

            <li className="li" key={index}>
                <Link to={'details/' + newArr.id} className="link">
                    <span className="headli" >{newArr.id}</span>
                    <span className="li">{newArr.name}</span>
                </Link>
                <button type="button" className="del" onClick={() => HandleDel(newArr.id)}>X</button>
            </li>
        )
    });
    const HandleDel = (id) => {
        const position = ListHeroes.findIndex(hero => id === hero.id)

        setLish(ListHeroes.splice(position, 1))


    }
    var a = ListHeroes.slice(ListHeroes.length - 1, ListHeroes.length)
    var lastid = a[0].id
    const [h, setH] = useState();
    const onHeroName = (y) => {
        const vl = y.target.value
        if (vl !== "") {
            setH(vl)
        }
    }

    const handleAdd = () => {
        console.log(h)
        if (h !== null) {
            var rs1 = { id: lastid + 1, name: h }
            var found = ListHeroes.includes(rs1);
            console.log(found)
            if (found === false) {
                setLish(ListHeroes.push(rs1))

            }
        }
    }

    return (



        <div >



            <div className="inputgr">
                <h3>My Heroes</h3>
                <label className="label">Hero Name:</label>
                <input placeholder="New Hero name" className="input" onInput={(y) => onHeroName(y)} />
                <button type="button" className="btn" onClick={handleAdd}>
                    <Link to="/heroeslist" className="linkheader">Add</Link>
                </button>

                <ul className="ul">

                    {element}
                </ul>
            </div >
        </div>




    )

}

export default HeroesList;