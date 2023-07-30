import Link from "next/link";

const PcBuilderPage = ({ data }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((category, idx) => (
              <tr key={idx}>
                <td>{category?.category}</td>
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
