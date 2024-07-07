import React, { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "t-shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "saree",
  },
  {
    name: "electronics",
  },
  {
    name: "shoes",
  },
  {
    name: "bags",
  },
  {
    name: "books",
  },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addproductFun = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.description === "" ||
      product.productImageUrl === "" ||
      product.category === ""
    ) {
      return toast.error("all fields are required");
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successfully");
      navigate("/admindashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
        <div className="bg-blue-gray-100 px-8 py-6 border border-blue-gray-200 rounded-xl shadow-md">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-blue-gray-700">
              Add Product
            </h2>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({ ...product, title: e.target.value });
              }}
              placeholder="Product Title"
              className="bg-blue-gray-100 text-blue-gray-600 border border-blue-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-400"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              placeholder="Product Price"
              className="bg-blue-gray-100 text-blue-gray-600 border border-blue-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-400"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.productImageUrl}
              onChange={(e) =>
                setProduct({ ...product, productImageUrl: e.target.value })
              }
              placeholder="Product Image Url"
              className="bg-blue-gray-100 text-blue-gray-600 border border-blue-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-400"
            />
          </div>

          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-blue-gray-400 bg-blue-gray-200 border border-blue-gray-200 rounded-md outline-none  "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className=" w-full px-2 py-1 text-blue-gray-600 bg-blue-gray-200 border border-blue-gray-200 rounded-md outline-none placeholder-blue-gray-400"
            ></textarea>
          </div>
          <div className="mb-3">
            <button
              onClick={addproductFun}
              type="button"
              className="bg-blue-gray-700 hover:bg-blue-gray-200 w-full text-white text-center
               py-2 font-bold rounded-md"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;


