import { addItem } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useDispatch } from "react-redux";

const BuildProductPage = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize the useRouter hook

  const handleAddToBuilder = (product) => {
    dispatch(addItem(product));
    router.push("/pc-builder");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map((product, idx) => (
        <div key={idx} className="card  shadow-xl">
          <figure>
            <img src={product?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.product_name}</h2>

            <p>{product?.category}</p>
            <p>{product?.status}</p>
            <p>{product?.price}</p>
            <p>{product?.average_rating}</p>

            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToBuilder(product)}
                className="btn btn-primary"
              >
                Add To Builder
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildProductPage;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-server-pi.vercel.app/catagories/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
