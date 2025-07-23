import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8 rounded-2xl shadow-xl bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Mini CRM</h1>
        <p className="text-gray-600 mb-6">Manage your customers and goals easily.</p>
        <div className="space-x-4">
          <Link to="/customers">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              View Customers
            </button>
          </Link>
          <Link to="/add-customer">
            <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
              Add Customer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
