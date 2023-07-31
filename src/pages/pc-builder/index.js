import { removeItem } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PcBuilderPage = ({ data }) => {
  const { components } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleSelectProduct = (category, productName) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [category]: productName,
    }));
  };

  const handleRemoveBuilder = (category) => {
    setSelectedProducts((prevSelected) => ({
      ...prevSelected,
      [category]: null,
    }));
    dispatch(removeItem(category));
  };

  // Map the selected product names outside the component
  const categoryProductMap = {};
  components.forEach((component) => {
    if (component.category && component.product_name) {
      categoryProductMap[component.category] = component.product_name;
    }
  });

  // Count the number of selected products under the 'Selected Product' column
  const selectedProductCount =
    Object.values(categoryProductMap).filter(Boolean).length;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Selected Product</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((category, idx) => (
              <tr key={idx}>
                <td>{category.category}</td>
                <td>{categoryProductMap[category.category] || "N/A"}</td>
                <td>
                  <Link href={`/pc-builder/${category.category}`}>
                    <button
                      className="btn btn-xs"
                      onClick={() =>
                        handleSelectProduct(
                          category.category,
                          category.product_name
                        )
                      }
                    >
                      Choose
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-xs"
                    onClick={() => handleRemoveBuilder(category.category)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        {/* Enable the button only when selectedProductCount is greater than 5 */}
        <button
          className="btn btn-primary"
          disabled={selectedProductCount <= 5}
        >
          {selectedProductCount <= 5
            ? "Please add more products"
            : "Complete Order"}
        </button>
      </div>
    </div>
  );
};

export default PcBuilderPage;

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://pc-builder-server-pi.vercel.app/allcategories`
  );
  const data = await res.json();

  return {
    props: {
      data: data?.data,
    },
  };
};
