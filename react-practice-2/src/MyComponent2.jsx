import React, {useState} from "react";

function MyComponent2(){

    const [Foods, setFoods] = useState(["Apple","Banana","Cherry","Date","Elderberry"]);


    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        

        setFoods(f=>[...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(Foods.filter((_,i) => i !==index));
    }








    return(<>
    <div>
        <h2>List Of Food</h2>
        <ul>
            {Foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
        </ul>

        <input type="text" placeholder="Enter Food" id='foodInput' />
        <button onClick={handleAddFood}>Add Food</button>
        
    </div>
    </>)
}
export default MyComponent2;
