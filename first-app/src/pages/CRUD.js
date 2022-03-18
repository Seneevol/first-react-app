import react from 'react';
import { Container, Row } from 'react-bootstrap';
import Create from '../components/CRUD/Create';
import Read from '../components/CRUD/Read';
import Update from '../components/CRUD/Update';
import Layout from '../layouts/Layout';

const CRUD = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Read/>
                    <Create/>
                    <Update/>
                </Row>
            </Container>
        </Layout>
    );
};

export default CRUD;