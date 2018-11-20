import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import axios from "axios"

class TableExp extends React.Component {
    constructor () {
        super();

        this.state = {
            tableData: [{
                name: '',
                model: '',
                manufacturer: '',
                length: '',
                vehicle_class: '',
                crew: '',
                passengers: '',
                cargo_capacity: '',
            }],
        };

        this.renderEditable = this.renderEditable.bind(this);
    }

    componentDidMount () {
        axios.get('https://swapi.co/api/vehicles/', {
            responseType: 'json'
        }).then(response => {
            this.setState({ tableData: response.data.results });
        });
    }

    renderEditable(cellInfo) {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const tableData = [...this.state.tableData];
              tableData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ tableData });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.tableData[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
    }

    render () {
        const { tableData } = this.state;

        //console.log(tableData)

        return (<ReactTable
                data={tableData}
                columns={[
                    {
                        Header: 'Vehicles',
                        columns: [
                            {
                                Header: 'Name',
                                accessor: 'name',
                                Cell: this.renderEditable,
                            },
                            {
                                Header: 'Model',
                                accessor: 'model',
                                Cell: this.renderEditable,
                            },
                            {
                                Header: 'Manufacturer',
                                accessor: 'manufacturer',
                                Cell: this.renderEditable,
                            },
                        ],
                    },
                    {
                        Header: 'Size',
                        columns: [
                            {
                                Header: 'Length',
                                accessor: 'length',
                                Cell: this.renderEditable,
                            },
                            {
                                Header: 'Class',
                                accessor: 'vehicle_class',
                                Cell: this.renderEditable,
                            },
                        ],
                    },
                    {
                        Header: 'Capacity',
                        columns: [
                            {
                                Header: 'Crew',
                                accessor: 'crew',
                                Cell: this.renderEditable,
                            },
                            {
                                Header: 'Passengers',
                                accessor: 'passengers',
                                Cell: this.renderEditable,
                            },
                            {
                                Header: 'Cargo',
                                accessor: 'cargo_capacity',
                                Cell: this.renderEditable,
                            },
                        ],
                    },
                ]}
                defaultPageSize={10}
                filterable
                className="-striped -highlight"
            />
        );
    }
};

export default TableExp