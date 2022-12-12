import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const clickHandle = () =>{
if(value === ""){
  alert("ajoutez quelque chose")
  return;
}; // cette ligne permet de ne pas ajouter une valeur vide

    const tempList = [...list]; // cette ligne permet de copier la liste
    tempList.push(value); // cette ligne permet d'ajouter la nouvelle valeur
    setList(tempList) // cette ligne permet de mettre à jour la liste
    setValue(""); // cette ligne permet de vider le champ input apres l'ajout
  }

  return (
    <div className="container">
      {/*Heading*/}
      <h1>TODO APP</h1>

      {/*creation new todo*/}

      <div className="create-section">
        <label>TOdo</label>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" onClick={clickHandle}> SAVE</button>
      </div>

      {/*montrer todo list*/}
      <div className="todo-list">
        {
          list.length > 0 ? list.map((item, index)=> <div key={index} className="todo-item" >{item}</div>)
           : <h2> No ToDO !!!</h2>
        }
      </div>
    </div>
  );
}

export default App;
