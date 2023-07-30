import Link from "next/link";

const categories = [
  { slug: "processor", title: "Processor" },
  { slug: "motherboard", title: "Motherboard" },
  { slug: "ram", title: "RAM" },
  { slug: "powersupplyunit", title: "Power Supply Unit" },
  { slug: "storagedevice", title: "Storage Device" },
  { slug: "monitor", title: "Monitor" },
  { slug: "others", title: "Others" },
];

const FeaturedCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {categories.map((category, idx) => (
        <Link key={idx} href={`catagories/${category.slug}`}>
          <div className="card shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{category.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedCategory;
