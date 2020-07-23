import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Axios from 'axios';

const DeleteConfirmation = (props) => {

    const {id, players, setPlayers} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function deletePlayer(){
        Axios.delete('http://localhost:8000/api/players/'+id)
            .then(res => {
                console.log(res);
                setPlayers(players.filter((player) => player._id !== id))
            })
            .catch(err =>{
                console.log(err);
            })
    }

    return (
        <>
        <Button variant="danger" onClick={handleShow}>
            Delete
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="danger" onClick={deletePlayer}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
 
export default DeleteConfirmation;