import React, {useState} from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import { CirclePicker } from 'react-color';

function KeyForm() {
    const [colorCode, setColorCode] = useState(null);
    const [keyName, setKeyName] = useState("");
    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
      const form = event.currentTarget;
      console.log(colorCode);
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (colorCode === null) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };

    const handleColorMessage = () => {
        if (colorCode === null) {
            return "Please choose a color";
        } else {
            return "no error";
        }
    }
 
    const colors = ["#63E3D5", "#9C80F5", "#FD6585", "#FC9A49", "#EEF1F5", "#B0B4C3",
    "#28C76F", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4",
    "#00bcd4", "#009688", "#ffeb3b", "#ffc107", "#ff9800",
    "#ff5722"]

    return(
        <Form className = "font" noValidate validated={validated} onSubmit={handleSubmit}>
             <Form.Group className = "pt-4">
                <Form.Label>Key Title</Form.Label>
                <Form.Control type="title" placeholder="Give your key a name" onChange={setKeyName} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Choose a color</Form.Label>
                <CirclePicker type="color" className = "w-100" colors={colors} onChangeComplete={setColorCode}/>
            </Form.Group>
            <Form.Group className = "mx-auto center pt-5">
                <p>{handleColorMessage}</p>
                <Button variant = "light" type="submit" className = "btn-rounded text-gray">looks good</Button>
            </Form.Group>
        </Form>
    );
}

export default KeyForm;