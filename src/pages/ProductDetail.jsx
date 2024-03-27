import { useParams,Link } from "react-router-dom";

function ProductDetailPage() {

    const params = useParams();
    // params.proudctId;

  return( 
  <>
  <h1>Product Detail Page</h1>;
  {params.productId}
  <p><Link to=".." relative="path">Back</Link></p>
  </>
  )

}
export default ProductDetailPage;
