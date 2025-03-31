# Hello beautiful users

# Vendor Contract Application

A React application for vendor and contract selection with summary reports. This application allows users to select vendors from a dropdown, view and select associated contracts, and view a summary report of the selected contracts in a table format.

## Features

- Select vendors from a dropdown menu
- View contracts associated with the selected vendor
- Select multiple contracts using checkboxes
- Display a summary report with contract details in a table
- Calculate total contract value
- Responsive design using Bootstrap

## Screenshots

*[Screenshots will be added after application deployment]*

## Setup and Installation

1. Clone this repository:
   ```
   git clone https://github.com/pankajmisr/vendor-contract-app.git
   ```

2. Navigate to the project directory:
   ```
   cd vendor-contract-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage

1. Select a vendor from the dropdown menu in the left panel
2. Once a vendor is selected, their available contracts will appear in the right panel
3. Select one or more contracts by checking the corresponding checkboxes
4. The summary report at the bottom will dynamically update to show details of the selected contracts
5. The report includes contract ID, name, value, dates, status, and a total value calculation

## Data Structure

The application currently uses static data that can be found in `src/data/vendorData.js`. In a production environment, this would be replaced with API calls to fetch vendor and contract data from a backend server.

## Technologies Used

- React.js
- Bootstrap 5
- CSS3
- ES6 JavaScript

## Customization

To customize the static data:

1. Open `src/data/vendorData.js`
2. Modify the vendor and contract objects according to your requirements
3. Ensure each vendor has a unique `id` and `name`
4. Ensure each contract has a unique `id`, `name`, `value`, `startDate`, `endDate`, and `status`

## Future Enhancements

- Add search functionality for vendors and contracts
- Implement filtering options for contracts
- Add form validation
- Create a backend API for dynamic data
- Add user authentication
- Implement contract creation, editing, and deletion
- Add data visualization features (charts, graphs)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact the repository owner.