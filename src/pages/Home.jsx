import { Link, useNavigate } from 'react-router-dom';
function HomePage() {

  const navigate = useNavigate();

  function navigateHandler(){
    navigate('/products');
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>Go to <Link to="products">Link of Products</Link></p>
      <button onClick={navigateHandler}>Button of Products</button>
    </>
  );
}
export default HomePage;