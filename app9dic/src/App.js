import logo from './logo.svg';
import './App.css';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product  urlimage="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" imageDescription="backpack" 
        title="Backpack" price ="34$" 
        content= "With a concept designed to be easy to understand. RAINS bridge the gap betwen geography and lifestyle."
        colors="Colors" 
        size = "Size" size1="S" size2="M" size3="L"
        buttonAction="Add to cart"
        />
      </header>
    </div>
  );
}


export default App;
