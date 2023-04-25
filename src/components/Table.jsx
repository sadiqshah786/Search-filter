import { Table } from 'react-bootstrap';
const TableData = ({ data }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((ele) => {
                        return (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.first_name}</td>
                                <td>{ele.last_name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.gender}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
    )
}

export default TableData
