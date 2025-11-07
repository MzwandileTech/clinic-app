import React, { useState } from "react";
import AppButton from "../../components/shared/AppButton";
import FilterSelect from "../../components/report components/FilterSelect"; // ✅ Import reusable component

const Settings: React.FC = () => {
  const [clinicInfo, setClinicInfo] = useState({
    name: "Sunrise Medical Center",
    phone: "(856) 123-4867",
    email: "contact@sunrisemedical.com",
    address: "123 Healthcare Ave, Medical District, Cityville, ST 12345",
  });

  const [billing, setBilling] = useState({
    currency: "USD",
    taxRate: "7.5",
    methods: ["Credit Card", "Debit Card", "Cash", "Medical Aid"],
  });

  const [notifications, setNotifications] = useState({
    appointmentReminder:
      "Hello {patient_name}, this is a reminder for your appointment at {clinic_name} on {appointment_date} at {appointment_time}. Please arrive 15 minutes early.",
    followUpReminder:
      "Hello {patient_name}, this is a follow-up reminder from {clinic_name}. Please contact us to schedule your next appointment.",
  });

  const handleSave = (section: string) => {
    alert(`${section} saved successfully!`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div>
          <h1 className="text-2xl font-semibold">System Settings</h1>
          <p className="text-gray-500 text-sm">
            Configure system-wide preferences and integrations
          </p>
        </div>

        {/* Clinic Information */}
        <section className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Clinic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Clinic Name
              </label>
              <input
                type="text"
                value={clinicInfo.name}
                onChange={(e) =>
                  setClinicInfo({ ...clinicInfo, name: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={clinicInfo.phone}
                onChange={(e) =>
                  setClinicInfo({ ...clinicInfo, phone: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={clinicInfo.email}
                onChange={(e) =>
                  setClinicInfo({ ...clinicInfo, email: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Address</label>
              <textarea
                value={clinicInfo.address}
                onChange={(e) =>
                  setClinicInfo({ ...clinicInfo, address: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 h-16"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Cancel
            </button>
            <AppButton name="Save Changes" />
          </div>
        </section>

        {/* Billing Settings */}
        <section className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Billing Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ✅ Replaced currency dropdown with FilterSelect */}
            <FilterSelect
              label="Currency"
              options={["USD (Dollar)", "EUR (Euro)", "ZAR (Rand)"]}
            />

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Tax Rate (%)
              </label>
              <input
                type="number"
                value={billing.taxRate}
                onChange={(e) =>
                  setBilling({ ...billing, taxRate: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Default Payment Methods
            </label>
            <div className="flex flex-wrap gap-3">
              {[
                "Credit Card",
                "Debit Card",
                "Cash",
                "Medical Aid",
                "Bank Transfer",
              ].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={billing.methods.includes(method)}
                    onChange={() =>
                      setBilling((prev) => ({
                        ...prev,
                        methods: prev.methods.includes(method)
                          ? prev.methods.filter((m) => m !== method)
                          : [...prev.methods, method],
                      }))
                    }
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Cancel
            </button>
            <AppButton name="Save Changes" />
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Notification Settings
          </h2>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Appointment Reminder
            </label>
            <textarea
              value={notifications.appointmentReminder}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  appointmentReminder: e.target.value,
                })
              }
              className="w-full border rounded-lg px-3 py-2 h-24"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Follow-up Reminder
            </label>
            <textarea
              value={notifications.followUpReminder}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  followUpReminder: e.target.value,
                })
              }
              className="w-full border rounded-lg px-3 py-2 h-24"
            />
          </div>

          <p className="text-sm text-green-600">
            ✅ Connected: WhatsApp Business API is ready for automated messages.
          </p>

          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Cancel
            </button>
            <AppButton name="Save Changes" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settings;
