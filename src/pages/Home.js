import React from "react";
import categories from "../Categories";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


function Home() {
    return (
    <div> 
        <img src =""/>
        <div className="featured-products-container container mt-4">
            <h2>Last products</h2>

            <div>
                <Link to ="/category/all" style={{ textAlign: "center", display: "block", textDecoration: "none"}}> See more {">>"} </Link>
            </div>
            </div>

        <div className="sale_baner--container mt-4">
            <img src=""/>
        </div>
        <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer key={category.name} to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col  md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>

        </div>
        
    );
}

export default Home;