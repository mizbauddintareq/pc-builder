import { removeItem } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const PcBuilderPage = ({ data }) => {
  const { components } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const getCategoryStatus = (categoryName) => {
    const categoryExists = components.some(
      (item) => item.category === categoryName
    );
    return categoryExists ? "Available" : "Not Available";
  };

  const handleRemoveBuilder = (category) => {
    dispatch(removeItem(category));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((category, idx) => (
              <tr key={idx}>
                <td>{category?.category}</td>
                <td>{getCategoryStatus(category?.category)}</td>
                <td>
                  <Link href={`/pc-builder/${category?.category}`}>
                    <button className="btn btn-xs">Chose</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-xs"
                    onClick={() => handleRemoveBuilder(category?.category)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PcBuilderPage;

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:5000/allcategories`);
  const data = await res.json();

  return {
    props: {
      data: data?.data,
    },
  };
};
