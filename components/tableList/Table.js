import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

class TableComponent extends Component {

    render() {
        return (
            <Table striped bordered hover variant="ligth">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Operación</th>
                  <th>Máquina</th>
                  <th>T1</th>
                  <th>T2</th>
                  <th>T3</th>
                  <th>T4</th>
                  <th>T5</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
        );
    }
}

export default TableComponent;