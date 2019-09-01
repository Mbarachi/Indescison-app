import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
        <div>
            <Modal
                isOpen={!!props.selectedOption}
                contentLabel="Selected Option"
                onRequestClose={props.handleClearModal}
                closeTimeoutMS={200}
                className="modal"
            >
                <h1 className="modal__title">Selected Option</h1>
                <h4>{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}</h4>
                <button className="button" onClick={props.handleClearModal}>Okay</button>

            </Modal>
        </div>
)


export default OptionModal