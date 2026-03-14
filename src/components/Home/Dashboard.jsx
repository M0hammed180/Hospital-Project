import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.reducer.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="pt-14">
        {/* background animation */}
        <div className="bg-animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="max-w-350 mx-auto p-5">
          {/* Header */}

          <header className="bg-white/95 backdrop-blur-xl rounded-[30px] p-7.5 mb-7.5 shadow-lg flex justify-between items-center border border-white/50">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 flex items-center justify-center rounded-[20px] text-white text-[40px] bg-linear-to-br from-cyan-400 to-blue-600 shadow-lg">
                <i className="fas fa-hospital"></i>
              </div>

              <div>
                <h1 className="text-[2rem] font-bold text-[#03045e]">
                  Patient Management System
                </h1>

                <p className="text-[#0077b6] font-semibold">Al Amal Hospital</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-[15px] font-semibold text-white bg-linear-to-br from-cyan-400 to-blue-600 shadow-md hover:-translate-y-1 transition">
                <i className="fas fa-plus"></i>
                Add Patient
              </button>

              <button className="flex items-center gap-2 px-6 py-3 rounded-[15px] font-semibold border-2 border-cyan-500 text-cyan-700 hover:bg-cyan-500 hover:text-white transition">
                <i className="fas fa-file-export"></i>
                Export Data
              </button>
            </div>
          </header>

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

          {/* Main grid */}

          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
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

              <div className="overflow-x-hidden">
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

            {/* Sidebar */}

            <div className="flex flex-col gap-6">
              <div className="bg-white/95 backdrop-blur-xl rounded-[25px] p-6 shadow">
                <h3 className="font-bold text-lg mb-5 flex items-center gap-2 text-[#03045e]">
                  <i className="fas fa-bolt"></i>
                  Quick Actions
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-100 hover:bg-cyan-100 transition">
                    <i className="fas fa-user-plus"></i>
                    <span>New Patient</span>
                  </button>

                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-100 hover:bg-cyan-100 transition">
                    <i className="fas fa-calendar-check"></i>
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
