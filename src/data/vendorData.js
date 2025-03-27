// Static data for vendors and their contracts
const vendorData = [
  {
    id: 1,
    name: "Acme Corporation",
    contracts: [
      { id: 101, name: "Office Supplies", value: 25000, rebate: 2.5, startDate: "2025-01-15", endDate: "2026-01-14", status: "Active" },
      { id: 102, name: "IT Support", value: 75000, rebate: 3.0, startDate: "2024-11-01", endDate: "2025-10-31", status: "Active" },
      { id: 103, name: "Equipment Maintenance", value: 45000, rebate: 1.5, startDate: "2024-08-15", endDate: "2025-08-14", status: "Active" }
    ]
  },
  {
    id: 2,
    name: "TechSolutions Inc.",
    contracts: [
      { id: 201, name: "Software Development", value: 120000, rebate: 4.0, startDate: "2024-12-01", endDate: "2025-12-01", status: "Active" },
      { id: 202, name: "Cloud Services", value: 85000, rebate: 3.5, startDate: "2025-01-01", endDate: "2025-12-31", status: "Active" },
      { id: 203, name: "Data Analytics", value: 65000, rebate: 2.0, startDate: "2024-10-15", endDate: "2025-04-14", status: "Active" }
    ]
  },
  {
    id: 3,
    name: "Global Logistics",
    contracts: [
      { id: 301, name: "Transportation Services", value: 95000, rebate: 2.0, startDate: "2025-02-01", endDate: "2026-01-31", status: "Active" },
      { id: 302, name: "Warehouse Management", value: 110000, rebate: 1.0, startDate: "2024-09-15", endDate: "2025-09-14", status: "Active" }
    ]
  },
  {
    id: 4,
    name: "Creative Design Co.",
    contracts: [
      { id: 401, name: "Website Redesign", value: 35000, rebate: 5.0, startDate: "2025-01-15", endDate: "2025-04-14", status: "Active" },
      { id: 402, name: "Marketing Materials", value: 28000, rebate: 3.5, startDate: "2024-11-01", endDate: "2025-02-28", status: "Active" },
      { id: 403, name: "Brand Strategy", value: 55000, rebate: 4.5, startDate: "2025-03-01", endDate: "2025-08-31", status: "Pending" }
    ]
  },
  {
    id: 5,
    name: "Secure Systems Ltd.",
    contracts: [
      { id: 501, name: "Security Auditing", value: 42000, rebate: 2.5, startDate: "2024-12-15", endDate: "2025-03-14", status: "Active" },
      { id: 502, name: "Surveillance Equipment", value: 78000, rebate: 3.0, startDate: "2025-02-01", endDate: "2025-08-31", status: "Active" }
    ]
  }
];

export default vendorData;