import React from 'react';

function SummaryReport({ vendor, selectedContracts }) {
  // Calculate total contract value
  const totalValue = selectedContracts.reduce((sum, contract) => sum + contract.value, 0);
  
  // Check if any contracts are selected
  if (!vendor || selectedContracts.length === 0) {
    return (
      <div className="summary-report">
        <h3>Summary Report</h3>
        <p>Please select a vendor and at least one contract to view the report.</p>
      </div>
    );
  }

  return (
    <div className="summary-report">
      <h3>Summary Report</h3>
      <div className="report-header">
        <p><strong>Vendor:</strong> {vendor.name}</p>
        <p><strong>Selected Contracts:</strong> {selectedContracts.length}</p>
        <p><strong>Total Value:</strong> ${totalValue.toLocaleString()}</p>
      </div>
      
      <table className="table table-striped report-table">
        <thead>
          <tr>
            <th>Contract ID</th>
            <th>Contract Name</th>
            <th>Value</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {selectedContracts.map(contract => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.name}</td>
              <td>${contract.value.toLocaleString()}</td>
              <td>{contract.startDate}</td>
              <td>{contract.endDate}</td>
              <td>
                <span className={`status-badge ${contract.status.toLowerCase()}`}>
                  {contract.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"><strong>Total</strong></td>
            <td colSpan="4"><strong>${totalValue.toLocaleString()}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default SummaryReport;