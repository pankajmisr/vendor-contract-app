import React, { useState } from 'react';
import './App.css';
import VendorSelector from './components/VendorSelector';
import ContractSelector from './components/ContractSelector';
import SummaryReport from './components/SummaryReport';
import vendorData from './data/vendorData';

function App() {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedContracts, setSelectedContracts] = useState([]);

  // Handle vendor selection change
  const handleVendorChange = (vendor) => {
    setSelectedVendor(vendor);
    setSelectedContracts([]); // Reset selected contracts when vendor changes
  };

  // Handle contract selection change
  const handleContractChange = (contracts) => {
    setSelectedContracts(contracts);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Vendor Contract Management</h1>
      </header>
      
      <main className="app-main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card selector-card">
                <div className="card-body">
                  <h2 className="card-title">Select Vendor</h2>
                  <VendorSelector 
                    vendors={vendorData} 
                    selectedVendor={selectedVendor} 
                    onVendorChange={handleVendorChange} 
                  />
                </div>
              </div>
            </div>
            
            <div className="col-md-8">
              <div className="card selector-card">
                <div className="card-body">
                  <h2 className="card-title">Select Contracts</h2>
                  <ContractSelector 
                    contracts={selectedVendor ? selectedVendor.contracts : []} 
                    selectedContracts={selectedContracts} 
                    onContractChange={handleContractChange} 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-12">
              <div className="card report-card">
                <div className="card-body">
                  <SummaryReport 
                    vendor={selectedVendor} 
                    selectedContracts={selectedContracts} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2025 Vendor Contract Management App</p>
        </div>
      </footer>
    </div>
  );
}

export default App;