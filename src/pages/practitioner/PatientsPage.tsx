// src/pages/PatientsPage.tsx 
import React, { useState, useMemo } from 'react';
// Import Patient type and getStatusBadge
import { mockPatients, getStatusBadge, Patient } from '../../data/mockData'; 

// --- ADDED TYPE DEFINITIONS ---
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}

// Fixed: Applied PaginationProps interface
const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-1 mt-6">
      <button 
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1} 
        className="px-3 py-1 text-sm font-medium border rounded-lg text-gray-600 disabled:opacity-50 hover:bg-gray-50"
      >
        Previous
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={`px-3 py-1 text-sm font-medium border rounded-lg transition-colors ${
            page === currentPage ? 'bg-blue-600 text-white border-blue-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0} 
        className="px-3 py-1 text-sm font-medium border rounded-lg text-gray-600 disabled:opacity-50 hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  );
};

const PatientsPage: React.FC = () => {
  const [search, setSearch] = useState<string>(''); // Typed useState
  const [currentPage, setCurrentPage] = useState<number>(1); // Typed useState
  const itemsPerPage = 6; 

  // Typed useMemo return value (Patient[])
  const filteredPatients: Patient[] = useMemo(() => {
    return mockPatients.filter(patient =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.patientId.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const paginatedPatients: Patient[] = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPatients.slice(start, start + itemsPerPage);
  }, [filteredPatients, currentPage, itemsPerPage]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // 3. Fixed: Typed the event as React.SyntheticEvent<HTMLImageElement, Event>
    // This provides the necessary 'currentTarget' property (instead of 'onerror' on the target)
    e.currentTarget.onerror = null; // prevents infinite loop
    e.currentTarget.src = 'https://placehold.co/100x100/E5E7EB/6B7280?text=No+Img'; // Fallback image
  };
  
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-100">
        <input 
          type="text" 
          placeholder="Search patients by name or ID..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPatients.length > 0 ? (
          // Typed the map iterator
          paginatedPatients.map((patient: Patient) => (
            <div key={patient.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-4 border-b pb-4">
                <img 
                  src={patient.image} 
                  alt={patient.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  onError={handleImageError} // Using the typed error handler
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{patient.name}</h3>
                  <p className="text-sm text-gray-500">ID: {patient.patientId}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
                <div className="font-medium text-gray-600">Age:</div>
                <div className="text-gray-800">{patient.age}</div>

                <div className="font-medium text-gray-600">Last Visit:</div>
                <div className="text-gray-800">{patient.lastVisit}</div>
                
                <div className="font-medium text-gray-600">Status:</div>
                <div className="flex items-center">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(patient.status)}`}>
                    {patient.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-5 pt-4 border-t">
                <button className="flex-1 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
                <button className="flex-1 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Add Note
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="md:col-span-2 lg:col-span-3 text-center p-8 text-gray-500 border-2 border-dashed rounded-lg">
            No patients match your search criteria.
          </div>
        )}
      </div>
      
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
      />
    </div>
  );
};

export default PatientsPage;