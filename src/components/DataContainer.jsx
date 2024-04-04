import { useState } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';

export default function DataContainer() {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Durvesh Pokade',
            age: 24,
        },
        {
            id: 2,
            name: 'Ekaksh Pawar',
            age: 23,
        },
        {
            id: 3,
            name: 'Yogesh Peje',
            age: 22,
        },
        {
            id: 4,
            name: 'Shardul Bhuvad',
            age: 30,
        },
    ]);

    return (
        <Container style={{ marginTop: 50, textAlign: 'center', maxWidth: 800 }}>
            <Card border="dark">
                <h1>List of Students</h1>
                <ListGroup as="ul"  >
                    {data.map(items => (
                        <ListGroup.Item variant="dark" >
                            <span>{items.name}</span> Age :<span>{items.age}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Container>
    );
};
