import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllCampaign = () => {
  const [loader, setLoader] = useState(true);
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setLoader(false);
    }
  }, [data]);

  return (
    <div className="container mx-auto px-3 md:px-5 mt-20">
      {loader ? (
        <div className="text-center mt-10">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-base-200">
                  <th></th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data?.map((item, index) => (
                  <tr key={index}>
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
                    <td>
                      <Link
                        to={`/details/${item._id}`}
                        className="btn btn-secondary font-semibold"
                      >
                        See more
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCampaign;
