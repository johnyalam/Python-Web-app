import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container bg="dark" variant="dark">
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; Robust Binary
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;