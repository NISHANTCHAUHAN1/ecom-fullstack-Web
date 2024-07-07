import React, { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
  const context = useContext(myContext);
  const { getAllOrder, deleteOrder }  = context;
  return (
    <div>
      <div>
        <div className="py-5">
          {/* text  */}
          <h1 className=" text-xl text-blue-gray-600  font-bold">All Order</h1>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-blue-gray-200 text-blue-gray-600">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  S.No.
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Order Id
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Image
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Title
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Category
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Quantity
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Total Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Status
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Address
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Pincode
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Phone Number
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-200 text-slate-700 bg-slate-100"
                >
                  Action
                </th>
              </tr>


              {getAllOrder.map((order) => {
                console.log(order);
                return (
                  <>
                  {order.cartItems.map((item, index) => {
                    const { id, productImageUrl, title, category, price, quantity } = item
                    return (
                      <tr key={index} className="text-blue-gray-600 ">
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {index + 1}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100  stroke-slate-500 text-slate-500 ">
                  {id}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  <img src={productImageUrl} alt="" />
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {title}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {category}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  ₹ {price}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {quantity}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  ₹ {price * quantity}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l text-green-600  first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {order.status}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                {order.addressInfo.name}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {order.addressInfo.address}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {order.addressInfo.pincode}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {order.addressInfo.mobileNumber}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {order.email}
                </td>

                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                  {order.date}
                </td>

                <td onClick={() => deleteOrder(order.id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                  Delete
                </td>
              </tr>
                    )
                  })}
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
