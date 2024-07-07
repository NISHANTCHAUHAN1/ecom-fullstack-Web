import React, { useContext } from 'react'
import myContext from '../../context/myContext';

const UserDetail = () => {
  const context = useContext(myContext);
    const { getAllUser } = context;
  return (
    <div>
    <div>
    <div className="py-5 flex justify-between items-center">
    <h1 className=" text-xl text-blue-gray-600 font-bold">Total User</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border border-collapse sm:border-separate border-blue-gray-200 text-blue-gray-600">
                <tbody>
                    <tr>
                        <th scope="col"
                           className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                            S.No.
                        </th>

                        <th scope="col"
                           className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                            Name
                        </th>

                        <th scope="col"
                           className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                            Email
                        </th>

                        <th scope="col"
                           className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                            Uid
                        </th>

<th scope="col"
                           className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                           Role
                        </th>

                        <th scope="col"
                           className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                            Date
                        </th>
                       
                    </tr>
                   {getAllUser.map((item , index)=> (
                      <tr key={index} className="text-blue-gray-400">
                      <td 
                      className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                          {index + 1}
                      </td>

                      <td 
                      className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                          {item.name}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                          {item.email}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                          {item.uid}
                      </td>

<td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                          {item.role}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                          {item.date}
                      </td>
                  </tr>
                   ))}
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default UserDetail
