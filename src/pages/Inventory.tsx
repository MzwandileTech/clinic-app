import React from 'react'

export default function Inventory(){
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold">Inventory Management</h1>
        <p className="text-gray-500">Monitor stock levels and supplier relationships</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div className="font-semibold">Low Stock Alert</div>
        <div className="text-sm text-gray-700">3 items are running low and need to be reordered.</div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold">Stock Items</h3>
          <button className="px-3 py-1 bg-clinicblue text-white rounded">Add Stock Item</button>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500"><tr><th>Item Name</th><th>Stock</th><th>Reorder</th><th>Expiry</th><th>Supplier</th><th>Actions</th></tr></thead>
            <tbody className="divide-y">
              <tr className="bg-red-50"><td>Amoxicillin 500mg</td><td>12</td><td>20</td><td>2025-06-15</td><td>PharmaSupply Co.</td><td><button className="px-2 py-1 border rounded text-sm">Edit</button></td></tr>
              <tr><td>Bandages (Medium)</td><td>45</td><td>25</td><td>2026-03-10</td><td>MediSupplies Inc.</td><td><button className="px-2 py-1 border rounded text-sm">Edit</button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
