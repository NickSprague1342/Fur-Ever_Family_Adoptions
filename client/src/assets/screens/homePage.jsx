import { useEffect, useState } from "react";
import fetchPets from '../services/petfinderAPI';
import AppPetCards from '../components/React/PetCards';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavbar from '../components/React/Navbar'

function AppHome() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const petDataJson = await fetchPets()

            console.log(petDataJson)
            setPets(petDataJson.animals)
        }
        fetchData()
    }, [])
    return (

        <div>
            <h1>Fur-Ever Family Adoptions</h1>
            <AppNavbar />
            <h2>Find a Furry Friend!</h2>
            <Container>
                <Row>
                    {pets?.map((pet) => (
                        <Col key={pet} xs={12} md={4} lg={3}>
                            {
                                pet?.primary_photo_cropped?.small ?
                                    <AppPetCards pet={pet} /> :
                                    null
                            }
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default AppHome