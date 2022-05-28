import React from 'react'
import { Nav } from 'react-bootstrap'


const MyAccountMenu = () => {
  return (
    <>
    <Nav variant="pills" className="flex-column">
    <Nav.Item>
        <Nav.Link eventKey="Track-Order">Track Order</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="Order-History">Order History</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="Address-Book">Address Book</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="Account-Details">Account Details</Nav.Link>
    </Nav.Item>
    </Nav>
    </>
  )
}

export default MyAccountMenu