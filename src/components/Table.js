import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import axios from "axios"

class BodyCellExample extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //     members: []
    // }
    this.state = {
      tableData: [{
          name: '',
          model: '',
          manufacturer: '',
          length: '',
      }],
    };
  }


  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#FF000",
        },
        paper: {
          boxShadow: "none",
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "none"
        }
      }
    }
  })

  componentDidMount () {
    axios.get('https://swapi.co/api/vehicles', {
        responseType: 'json'
    }).then(response => {
        this.setState({ tableData: response.data.results });
    });
  }

  // componentDidMount(){
  //   //fetch data member dari web
  //   axios.get("https://swapi.co/api/vehicles")
  //   .then(response => response.data.results)
  //   .then(membersData => {
  //     this.setState({
  //           //slice untuk limit     
  //           members: membersData.slice(0,3).map(member => ({
  //               name : member.name,
  //               model : member.model,
  //               manufacturer : member.manufacturer,
  //               length : member.length
  //           }))
  //       })
  //   })
  // }


  render() {

    const { tableData } = this.state

    const columns = [
      {
       name: "Name",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "Company",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "City",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "State",
       options: {
        filter: true,
        sort: true,
       }
      },
     ];
     
    //  const data = [
    //   ["Joe James", "Test Corp", "Yonkers", "NY"],
    //   ["John Walsh", "Test Corp", "Hartford", "CT"],
    //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
    //   ["James Houston", "Test Corp", "Dallas", "TX"],
    //  ];
     
     const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: true,
      rowsPerPage: 10,
      resizableColumns: true,
      onRowsSelect: (rowsSelected, allRows) => {
        console.log(rowsSelected, allRows);
      },
      onRowsDelete: (rowsDeleted) => {
        console.log(rowsDeleted, "were deleted!");
      },
      onChangePage: (numberRows) => {
        console.log(numberRows);
      },
      onSearchChange: (searchText) => {
        console.log(searchText);
      },
      onColumnSortChange: (column, direction) => {
        console.log(column, direction);
      },
      onColumnViewChange: (column, action) => {
        console.log(column, action);
      },
      onFilterChange: (column, filters) => {
        console.log(column, filters);
      },
      onCellClick: (cellIndex, rowIndex) => {
        console.log(cellIndex, rowIndex);
      },
      onRowClick: (rowData, rowState) => {
        console.log(rowData, rowState);
      }
    };
     
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable title={"ACME Employee list"} data={tableData} columns={columns} options={options} />
      </MuiThemeProvider>
    );

  }
}

export default BodyCellExample