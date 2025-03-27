import React from 'react';

function VendorSelector({ vendors, selectedVendor, onVendorChange }) {
  return (
    <div className="vendor-selector">
      <label htmlFor="vendorSelect" className="form-label">Select Vendor:</label>
      <select
        id="vendorSelect"
        className="form-select"
        value={selectedVendor ? selectedVendor.id : ''}
        onChange={(e) => {
          const vendorId = parseInt(e.target.value);
          const vendor = vendors.find(v => v.id === vendorId);
          onVendorChange(vendor);
        }}
      >
        <option value="">-- Select a Vendor --</option>
        {vendors.map(vendor => (
          <option key={vendor.id} value={vendor.id}>
            {vendor.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VendorSelector;