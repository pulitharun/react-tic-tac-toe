import{useState} from 'react'


export default function Player({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName)
const [Editing , setEditing] = useState(false) //stating state is false as there is no edit done


function handleEditClick() {
    setEditing((editing) => !editing ) ;
    

}

function handelChange(event) {
setPlayerName(event.target.value)
}

let editablePlayerName = <span className= 'player-name'>{playerName}</span>
//let butn = 'edit'

if (Editing){
    editablePlayerName = <input type ='text' required value = {playerName}  onChange={handelChange} />
    //butn = 'save' // editing is true means gives 'save' otherwise 'edit'
} 

return (
    <li>
            <span>
            {editablePlayerName}
          <span className = "player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{Editing ? 'save' : 'edit'}</button>   
           </li>
)

}