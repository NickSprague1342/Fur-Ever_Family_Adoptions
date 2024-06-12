import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function AppPetCards({ pet }) {

    return (
        <Card style={{ width: '15rem', height: '30rem' }}>
            <Card.Img variant="top" src={pet?.primary_photo_cropped?.small ? pet?.primary_photo_cropped?.small}/>
            <Card.Body>
                <Card.Title>{pet?.name}</Card.Title>
                <Card.Text>
                    {pet?.breeds?.primary},
                    {pet?.age},
                </Card.Text>
                <Button variant="primary" href={pet?.url}>Click to View Pet!</Button>
            </Card.Body>
        </Card>
    );
}

export default AppPetCards;