import React from 'react';

function ContractSelector({ contracts, selectedContracts, onContractChange }) {
  return (
    <div className="contract-selector">
      <label className="form-label">Select Contracts:</label>
      <div className="contract-list">
        {contracts && contracts.length > 0 ? (
          contracts.map(contract => (
            <div key={contract.id} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`contract-${contract.id}`}
                value={contract.id}
                checked={selectedContracts.some(c => c.id === contract.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onContractChange([...selectedContracts, contract]);
                  } else {
                    onContractChange(selectedContracts.filter(c => c.id !== contract.id));
                  }
                }}
              />
              <label className="form-check-label" htmlFor={`contract-${contract.id}`}>
                {contract.name} (${contract.value.toLocaleString()})
              </label>
            </div>
          ))
        ) : (
          <p>Please select a vendor to view available contracts.</p>
        )}
      </div>
    </div>
  );
}

export default ContractSelector;