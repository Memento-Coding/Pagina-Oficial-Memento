import React from 'react'
import Form from 'react-bootstrap/Form'
import Select from 'react-select';
import './modalContratameStyles.css'
export const ModalContratame = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 containerInputsTitle" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" className='inputSelector' placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3 containerInputsTitle" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" className='inputSelector' placeholder="Correo" />
                </Form.Group>
                <Form.Group className="mb-3 containerInputs" controlId="exampleForm.ControlInput1">
                    <Form.Select className='inputSelector inputSeleccionar'>
                        <option>Aplicación Web</option>
                        <option>Aplicación Mobile</option>
                        <option>UX/UI Desing</option>
                        <option>Anulado</option>
                        <option>Branding</option>
                    </Form.Select>
                    <Form.Group className="mb-3 containerInputs" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} className='inputTextArea' placeholder='Descripción del proyecto' />
                    </Form.Group>
                </Form.Group>
            </Form>
        </div>
    )
}
