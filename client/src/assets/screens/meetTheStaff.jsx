import AppNavbar from "../components/React/Navbar"
import { ListGroup } from "react-bootstrap"


function AppContact() {
    return (
        <div>
            <h1>Fur-Ever Family Adoptions</h1>
            <AppNavbar />
            <h2>Meet the Staff!</h2>
            <ListGroup>
                <ListGroup.Item action href="https://github.com/NickSprague1342">
                    <img src="./images/nick.jpg" alt="" className="staff_image" />
                    Nick Sprague
                    <p>Dog Expert and Developer</p>
                </ListGroup.Item>
                <ListGroup.Item action href="">
                    <img src="./images/cassie_headshot2.jpeg" alt="" className="staff_image" />
                    Cassie Sprague
                    <p>Dog Whisperer and Lead Developer</p>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <img src="./images/meeko_headshot.jpeg" alt="" className="staff_image" />
                    Meeko
                    <p>CFO (Chief Fun Officer)</p>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <img src="./images/raven_headshot.jpg" alt="" className="staff_image" />
                    Raven
                    <p>Doggie Chief of Staff and Elder</p>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <img src="./images/sawyer_headshot.jpg" alt="" className="staff_image" />
                    Sawyer
                    <p>Marketing Executive and Anxiety Expert</p>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <img src="./images/rogue_headshot.jpg" alt="" className="staff_image" />
                    Rogue
                    <p>Department Stunt 'Man' who does all her own stunts</p>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <img src="./images/storm_headshot.jpg" alt="" className="staff_image" />
                    Storm
                    <p>Resident 'Tough Guy'....honestly kinda just a bully</p>
                </ListGroup.Item>


            </ListGroup>
        </div>
    )
}

export default AppContact