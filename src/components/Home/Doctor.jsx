import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Doctor() {
  const username = useSelector((state) => state.login.user?.username);

  return (
    <div>
      <div className="pt-14 ">
        <div className="bg-animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="container">
          <h1 className="text-9xl font-mono py-10">Dr {username}</h1>
          {/* Stats */}

          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white/95 backdrop-blur p-7 rounded-[25px] shadow flex items-center gap-5 hover:-translate-y-1 transition duration-200">
              <div className="w-15 h-15 flex items-center justify-center rounded-[15px] text-white text-[28px] bg-linear-to-br from-indigo-400 to-purple-600">
                <i className="fas fa-user-injured"></i>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#03045e]">120</h3>
                <p className="text-gray-500">Total Patients</p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur p-7 rounded-[25px] shadow flex items-center gap-5 hover:-translate-y-1 transition duration-200">
              <div className="w-15 h-15 flex items-center justify-center rounded-[15px] text-white text-[28px] bg-linear-to-br from-green-400 to-emerald-700">
                <i className="fas fa-user-check"></i>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#03045e]">80</h3>
                <p className="text-gray-500">Active Patients</p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur p-7 rounded-[25px] shadow flex items-center gap-5 hover:-translate-y-1 transition duration-200">
              <div className="w-15 h-15 flex items-center justify-center rounded-[15px] text-white text-[28px] bg-linear-to-br from-purple-400 to-pink-600">
                <i className="fas fa-user-check"></i>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#03045e]">80</h3>
                <p className="text-gray-500">Pending</p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur p-7 rounded-[25px] shadow flex items-center gap-5 hover:-translate-y-1 transition duration-200">
              <div className="w-15 h-15 flex items-center justify-center rounded-[15px] text-white text-[28px] bg-linear-to-br from-yellow-400 to-orange-700">
                <i className="fas fa-user-check"></i>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#03045e]">80</h3>
                <p className="text-gray-500">Critical Cases</p>
              </div>
            </div>
          </div>

          {/* Main Grid */}

          <div className="">
            {/* Patients */}

            <div className="bg-white/95 backdrop-blur-xl rounded-[30px] p-7.5 shadow border border-white/60">
              <div className="flex justify-between items-center mb-6 pb-5 border-b">
                <h2 className="text-xl font-bold flex items-center gap-2 text-[#03045e]">
                  <i className="fas fa-procedures"></i>
                  Patients List
                </h2>

                <div className="relative w-75">
                  <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

                  <input
                    type="text"
                    placeholder="Search patient..."
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-[15px] bg-gray-100 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Table */}

              <div className=" overflow-x-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-500 text-sm">
                      <th className="p-4 text-left">Patient</th>
                      <th className="p-4 text-left">Age</th>
                      <th className="p-4 text-left">Department</th>
                      <th className="p-4 text-left">Status</th>
                      <th className="p-4 text-left">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-white shadow rounded-lg hover:scale-[1.02] transition">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11.25 h-11.25 rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold">
                            M
                          </div>

                          <div>
                            <div className="font-bold text-[#03045e]">
                              Mohamed Ahmed
                            </div>

                            <div className="text-sm text-gray-400">#P001</div>
                          </div>
                        </div>
                      </td>

                      <td className="p-4">35</td>

                      <td className="p-4">Cardiology</td>

                      <td className="p-4">
                        <span className="px-4 py-1 rounded-full bg-green-200 text-green-900 text-sm font-semibold">
                          Active
                        </span>
                      </td>

                      <td className="p-4 flex gap-2">
                        <button className="p-2 rounded hover:bg-gray-200">
                          <i className="fas fa-eye"></i>
                        </button>

                        <button className="p-2 rounded hover:bg-gray-200">
                          <i className="fas fa-edit"></i>
                        </button>

                        <button className="p-2 rounded hover:bg-red-200">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
