import { useEffect, useState ,useRef} from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Import a loading animation library
import "./pagination.css";

export const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  
  useEffect(() => {
    

    setIsLoading(true); // Set loading state to true before fetching
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setIsLoading(false); // Set loading state to false after successful fetch
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false); // Set loading state to false after failed fetch
      });
  }, [pages]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <ClipLoader className="loading" size={100} color="red" />{" "}
        {/* Customize animation size and color */}
        <p>Loading Products...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching Products: {error.message}</p>;
  }

function handleMinus() {
  if(pages>1){
    setPage((prev)=>prev-1);
    }
}
function goTo(e) {
  setPage(e);

}
function handlePlus() {
  if(pages<products.length/6){
  setPage((prev)=>prev+1);
  }

}
function scrolll(){
  window.scroll({
    top:document.body.scrollHeight,
    left:0,
    behavior:'instant'
  });
};

  return (
    <>
 
  <header  onClick={()=> scrolll()}>PAGINATION</header>
      {products.length > 0 && (
        <div className="product__container">
          {products.slice(pages * 6 - 6, pages * 6).map((product) => (
            <div className="product__card">
              <span>{product.title}</span>
              <img src={product.images[0]} alt={product.title} />
            </div>
          ))}
        </div>
      )}
      {
        products.length > 0 && <div  className="paginate-number">
          <span onClick={()=> handleMinus()}>-</span>{
            [...Array(products.length/6)].map((_,index)=>{
              return <span key={index} className={pages === index+1 ? "selected":""} onClick={(event)=> goTo((index+1))}>{index+1}</span>
            })
          }<span  onClick={()=> handlePlus()}>+</span>
        </div>
      }
    </>
  );
};
