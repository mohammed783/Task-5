// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Pagination, Card } from 'react-bootstrap';
import './Dash.css';

interface Product {
  id: number;
  name: string;
  image: string;
}

const mockProducts: Product[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: 'iPhone X',
  image: `/public/assets/image 1.png`,
}));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mockProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(mockProducts.length / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="sidebar">
          <div className="user-profile">
            <img
              src="https://randomuser.me/api/portraits/men/32.jg"
              alt="user"
              className="profile-img"
            />
            <h5>Mohammed Alkordy</h5>
          </div>
          <Button variant="warning" className="w-100 mb-2">Products</Button>
          <div className="nav-item">Favorites</div>
          <div className="nav-item">Order List</div>
          <div className="logout">Logout</div>
        </Col>
        <Col md={10} className="main-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <input type="text" placeholder="Search product by name" className="search-input" />
            <Button variant="warning">ADD NEW PRODUCT</Button>
          </div>
          <Row>
            {currentProducts.map((product) => (
              <Col key={product.id} sm={6} md={3} className="mb-4">
                <Card className="product-card">
                  <div className="product-hover">
                    <div className="product-name">{product.name}</div>
                    <div className="hover-buttons">
                      <Button variant="warning" size="sm">Edit</Button>{' '}
                      <Button variant="danger" size="sm">Delete</Button>
                    </div>
                  </div>
                  <Card.Img variant="top" src={product.image} />
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination className="justify-content-center">
            <Pagination.Prev onClick={() => paginate(Math.max(currentPage - 1, 1))} />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => paginate(Math.min(currentPage + 1, totalPages))} />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
