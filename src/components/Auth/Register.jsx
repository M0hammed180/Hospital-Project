import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    role: "patient",
    name: "",
    phone: "",
    email: "",
    password: "",
    age: "",
    bloodType: "",
    specialization: "",
    licenseNumber: "",
    secretKey: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا بنفلتر البيانات عشان نبعت بس اللي يخص الـ role المختار
    console.log("Data to send to API:", formData);
    alert(`Registered as ${formData.role}! check console.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-6 sm:py-12">
      <div className="p-10 mx-auto md:w-full md:max-w-2xl">
        <h1 className="font-bold text-center text-2xl mb-5 text-blue-600">Your Health Logo</h1>
        
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          <form onSubmit={handleSubmit} className="p-8">
            
            {/* اختيار الـ Role */}
            <div className="mb-6">
              <label className="font-bold text-sm text-gray-700 block mb-2">Select Your Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-0 outline-none transition-all"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* الحقول الأساسية (Name, Phone, Email, Password) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Full Name</label>
                <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm outline-none focus:ring-2 focus:ring-blue-100" placeholder="John Doe" required />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Phone Number</label>
                <input name="phone" value={formData.phone} onChange={handleChange} type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm outline-none focus:ring-2 focus:ring-blue-100" placeholder="010..." required />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase ml-1">E-mail</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm outline-none focus:ring-2 focus:ring-blue-100" placeholder="email@example.com" required />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase ml-1">Password</label>
                <input name="password" value={formData.password} onChange={handleChange} type="password" className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm outline-none focus:ring-2 focus:ring-blue-100" placeholder="••••••••" required />
              </div>
            </div>

            {/* الحقول المتغيرة حسب الـ Role */}
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-6 transition-all">
              <h3 className="text-blue-700 text-xs font-bold uppercase mb-4 tracking-wider">Additional Info for {formData.role}</h3>
              
              {formData.role === "patient" && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500">
                  <input name="age" value={formData.age} onChange={handleChange} type="number" placeholder="Age" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none bg-white" />
                  <input name="bloodType" value={formData.bloodType} onChange={handleChange} type="text" placeholder="Blood Type (e.g. A+)" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none bg-white" />
                </div>
              )}

              {formData.role === "doctor" && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500">
                  <input name="specialization" value={formData.specialization} onChange={handleChange} type="text" placeholder="Specialization" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none bg-white" />
                  <input name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} type="text" placeholder="License Number" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none bg-white" />
                </div>
              )}

              {formData.role === "admin" && (
                <input name="secretKey" value={formData.secretKey} onChange={handleChange} type="password" placeholder="Admin Secret Key" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none bg-white animate-in fade-in duration-500" />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              Complete Registration as {formData.role}
            </button>
          </form>

          <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
             <span className="text-sm text-gray-500">Already have an account?</span>{" "}
             <Link to="/login" className="text-sm text-blue-600 font-bold hover:underline">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}