import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../utils/provider/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://donation-app-seven.vercel.app/addCampaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deleteCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingCampaign = data.filter((p) => p._id != id);
              setData(remainingCampaign);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://donation-app-seven.vercel.app/addCampaign`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, [data]);

  const remainingData = data.filter((users) => users?.email === user?.email);
  return (
    <div className="container mx-auto px-3 md:px-5 mt-20">
      <div className="">
        <div className="mb-6 text-3xl font-semibold">
          Total Campaign: {remainingData.length}
        </div>

        {loader ? (
          <div className="text-center mt-10">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          remainingData && (
            <div>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr className="bg-base-200">
                      <th></th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {remainingData?.map((item, index) => (
                      <tr key={index} className="">
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
                        <td>{item.title}</td>
                        <td>{item.desc.slice(0, 78)}...</td>
                        <td className="flex  gap-3">
                          <Link to={`/update/${item._id}`}>
                            <FaEdit size={25} />
                          </Link>
                          <button onClick={() => handleDelete(item._id)}>
                            <FaDeleteLeft size={25} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
