import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import AppButton from "../../components/shared/AppButton";

const Inventory: React.FC = () => {
  const inventoryData = [
    {
      name: "Amoxicillin 500mg",
      stock: 12,
      reorderLevel: 20,
      expiry: "2025-06-15",
      supplier: "PharmaSupply Co.",
    },
    {
      name: "Bandages (Medium)",
      stock: 45,
      reorderLevel: 25,
      expiry: "2026-03-10",
      supplier: "MediSupplies Inc.",
    },
    {
      name: "Disposable Syringes 10ml",
      stock: 18,
      reorderLevel: 30,
      expiry: "2025-11-22",
      supplier: "Global Medical",
    },
    {
      name: "Paracetamol 500mg",
      stock: 120,
      reorderLevel: 50,
      expiry: "2025-09-05",
      supplier: "PharmaSupply Co.",
    },
    {
      name: "Ibuprofen 400mg",
      stock: 65,
      reorderLevel: 40,
      expiry: "2024-12-18",
      supplier: "MediSupplies Inc.",
    },
    {
      name: "Medical Gloves (Large)",
      stock: 200,
      reorderLevel: 100,
      expiry: "2026-05-30",
      supplier: "Global Medical",
    },
    {
      name: "Antiseptic Solution",
      stock: 8,
      reorderLevel: 15,
      expiry: "2025-08-12",
      supplier: "PharmaSupply Co.",
    },
  ];

  const lowStockItems = inventoryData.filter(
    (item) => item.stock < item.reorderLevel
  );

  const getRowColor = (item: any) => {
    if (item.stock < item.reorderLevel) return "bg-red-50";
    if (item.stock === item.reorderLevel) return "bg-yellow-50";
    return "bg-white";
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* <Sidebar /> */}

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Inventory Management</h1>
          <p className="text-sm text-gray-500">
            Monitor stock levels and supplier relationships
          </p>
        </div>

        {/* Low Stock Alert */}
        {lowStockItems.length > 0 && (
          <div className="flex items-center gap-3 bg-yellow-50 text-yellow-700 border border-yellow-200 px-4 py-3 rounded-lg mb-6">
            <FaExclamationTriangle className="text-yellow-600" />
            <span className="text-sm font-medium">
              {lowStockItems.length} item
              {lowStockItems.length > 1 ? "s" : ""} are running low and need to
              be reordered.
            </span>
          </div>
        )}

        {/* Add Button */}
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg mb-6 transition">
          Add Stock Item
        </button> */}
        <AppButton name="Add Stock Item"/>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl border shadow-sm">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-600">Item Name</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Stock Count</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Reorder Level</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Expiry Date</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Supplier</th>
                <th className="px-6 py-3 font-semibold text-gray-600 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr
                  key={index}
                  className={`${getRowColor(item)} border-b hover:bg-gray-50 transition`}
                >
                  <td className="px-6 py-3 font-medium">{item.name}</td>
                  <td className="px-6 py-3">{item.stock}</td>
                  <td className="px-6 py-3">{item.reorderLevel}</td>
                  <td className="px-6 py-3">{item.expiry}</td>
                  <td className="px-6 py-3">{item.supplier}</td>
                  <td className="px-6 py-3 text-center space-x-2">
                    <button className="px-3 py-1 text-sm border rounded-lg text-gray-700 hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm border rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                      Reorder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Inventory;

