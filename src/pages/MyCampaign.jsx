import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../utils/provider/AuthProvider";

const MyCampaign = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const remainingData = data.filter((users) => users?.email === user?.email);
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="">
        <div className="mb-6 text-3xl font-semibold">
          Total Campaign: {remainingData.length}
        </div>

        {remainingData && (
          <div>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr className="bg-base-200">
                    <th></th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {remainingData?.map((item, index) => (
                    <tr className="">
                      <th>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item.photo}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>{item.name}</td>
                      <td>{item.title}</td>
                      <td className="flex  gap-3">
                        <Link to={`/update/${item._id}`}>
                          <FaEdit size={25} />
                        </Link>
                        <button>
                          <FaDeleteLeft size={25} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
