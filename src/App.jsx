import './App.css'
import SearchBar from "./components/SearchBar.jsx";
import ProductTable from "./components/ProductTable.jsx";
import FilterableProductTable from "./components/FilterableProductTable.jsx";
import Profile from "./components/Profile.jsx";
import Gallery from "./components/Gallery.jsx";
import Bio from "./components/Bio.jsx";
import {people} from "./components/data.js";
import {getImageUrl} from "./components/utils.js";
import Button from "./components/Button.jsx";
import AlertButton from "./components/AlertButton.jsx";
import ToolBar from "./components/ToolBar.jsx";

function App() {
    /*const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ];
    const chemists = people.filter((person) => person.profession === 'chemist');
    const listItems = chemists.map((person)=>
    <li key={person.id}>
        <img
            src={getImageUrl(person)}
            alt={person.name}
        />
        <p>
            <b>{person.name}</b>
            {` ${person.profession} known for ${person.accomplishment}`}
        </p>
    </li>
    )*/

    return (
        <>
            {/*<FilterableProductTable products={PRODUCTS}/>*/}
            {/*<Gallery/>*/}
            {/*<Bio/>*/}
            {/*<ul>{listItems}</ul>*/}
            {/*<Button/>*/}
            <ToolBar/>
        </>
    );


}


export default App
