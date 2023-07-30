import Link from "next/link";
import { useSelector } from "react-redux";

const PcBuilderPage = ({ data }) => {
  const { components } = useSelector((state) => state.product);

  const getCategoryStatus = (categoryName) => {
    const categoryExists = components.some(
      (item) => item.category === categoryName
    );
    return categoryExists ? "Available" : "Not Available";
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
            </tr>
          </thead>
          <tbody>
            {data.map((category, idx) => (
              <tr key={idx}>
                <td>{category?.category}</td>
                <td>{getCategoryStatus(category?.category)}</td>
                <td>
                  <Link href={`/pc-builder/${category?.category}`}>
                    <button className="btn btn-xs">Tiny</button>
                  </Link>
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
