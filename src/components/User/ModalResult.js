import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalResult = (props) => {
    const { show, setShow, dataModalResult } = props;

    const handleClose = () => setShow(false);

    console.log('check data:', dataModalResult)
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Your Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <span>Total question:</span>
                            <input type='text' value={dataModalResult.countTotal} disabled />
                        </div>
                        <div>
                            <span>Total correct answer:</span>
                            <input type='text' value={dataModalResult.countCorrect} disabled />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Show answer
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;