import React from 'react';
import { Col } from 'react-bootstrap';

const Create = () => {
    return (
        <Col md={4}>
           <h2>Create</h2>
           <form>
            <label>
                <p>Name</p>
                <input type="text" name='name'/>
            </label>
            <label>
                <p>Surname</p>
                <input type="text" name='surname'/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
          </form>
        </Col>
    );
};

export default Create;