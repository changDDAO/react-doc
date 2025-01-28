import './App.css'
import SearchBar from "./components/SearchBar.jsx";
import ProductTable from "./components/ProductTable.jsx";
import FilterableProductTable from "./components/FilterableProductTable.jsx";
import Profile from "./components/Profile.jsx";
import Gallery from "./components/Gallery.jsx";
import Bio from "./components/Bio.jsx";

function App() {
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ];

    return (
        <>
            {/*<FilterableProductTable products={PRODUCTS}/>*/}
            {/*<Gallery/>*/}
            <Bio/>
        </>
    );


}


export default App
