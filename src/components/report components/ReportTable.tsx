import React from "react";

interface ReportTableProps {
  title: string;
  exportLabel?: string;
  columns: string[];
  rows: (string[] | React.ReactNode[])[];
}

const ReportTable: React.FC<ReportTableProps> = ({ title, exportLabel, columns, rows }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {exportLabel && (
          <button className="text-sm text-blue-600 hover:underline">
            {exportLabel}
          </button>
        )}
      </div>

      <table className="w-full text-sm border-t">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="text-left py-2 px-3 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              {row.map((cell, j) => (
                <td key={j} className={`py-2 px-3 ${i === rows.length - 1 ? "font-semibold" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
