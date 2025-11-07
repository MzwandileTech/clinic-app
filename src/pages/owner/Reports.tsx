import React from "react";
import ReportTable from "../../components/report components/ReportTable";
import FilterSelect from "../../components/report components/FilterSelect";
import AppButton from "../../components/shared/AppButton";

const Reports: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-1 p-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Reports & Analytics</h1>
          <p className="text-gray-500 text-sm">
            Financial, operational, and clinical insights for your practice
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">Report Filters</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FilterSelect
              label="Date Range"
              options={["This Week", "This Month", "Last 3 Months"]}
            />
            <FilterSelect
              label="Practitioner"
              options={["All Practitioners", "Dr. Sarah Mitchell", "Dr. James Chen"]}
            />
            <FilterSelect
              label="Service Type"
              options={["All Services", "Consultations", "Vaccinations", "Lab Tests"]}
            />
          </div>
          <AppButton name="Apply Filters"
            onClick={() => console.log("Add staff clicked")} />
        </div>

       
        <ReportTable
          title="Revenue Breakdown"
          exportLabel="Export CSV"
          columns={["Service", "Medical Aid", "Patient Payment", "Total"]}
          rows={[
            ["Consultations", "$2,450", "$710", "$3,160"],
            ["Vaccinations", "$1,200", "$320", "$1,520"],
            ["Dental Procedures", "$1,100", "$910", "$4,060"],
            ["Lab Tests", "$2,810", "$300", "$3,110"],
            ["Total", "$7,560", "$2,240", "$9,800"],
          ]}
        />
        <ReportTable
          title="Appointment Statistics"
          exportLabel="Export CSV"
          columns={[
            "Practitioner",
            "Total",
            "Completed",
            "No-Shows",
            "Cancelled",
          ]}
          rows={[
            ["Dr. Sarah Mitchell", "124", "118", "4", "2"],
            ["Dr. James Chen", "98", "90", "5", "3"],
            ["Nurse Emily Wilson", "76", "72", "2", "2"],
            ["Total", "298", "282", "9", "7"],
          ]}
        />

        <ReportTable
          title="Claims Aging Report"
          exportLabel="Export PDF"
          columns={[
            "Claim ID",
            "Patient",
            "Medical Aid",
            "Amount",
            "Submitted",
            "Status",
          ]}
          rows={[
            ["CL-2023-0466", "John Smith", "MediCare Plus", "$245", "15 days ago",
              <span className="px-2 py-1 rounded-lg text-xs font-medium bg-yellow-50 text-yellow-600">Pending</span>
            ],
            ["CL-2023-0465", "Sarah Johnson", "HealthFirst", "$180", "10 days ago",
              <span className="px-2 py-1 rounded-lg text-xs font-medium bg-green-50 text-green-600">Approved</span>
            ],
            ["CL-2023-0464", "Michael Brown", "BlueCross", "$310", "8 days ago",
              <span className="px-2 py-1 rounded-lg text-xs font-medium bg-green-50 text-green-600">Approved</span>
            ],
            ["CL-2023-0463", "Emily Davis", "MediCare Plus", "$150", "5 days ago",
              <span className="px-2 py-1 rounded-lg text-xs font-medium bg-green-50 text-green-600">Approved</span>
            ],
            ["CL-2023-0462", "Robert Wilson", "HealthFirst", "$275", "3 days ago",
              <span className="px-2 py-1 rounded-lg text-xs font-medium bg-yellow-50 text-yellow-600">Pending</span>
            ],
          ]}
        />
      </main>
    </div>
  );
};

export default Reports;
