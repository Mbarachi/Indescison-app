import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
        <div>
            <Modal
                isOpen={!!props.selectedOption}
                contentLabel="Selected Option"
                onRequestClose={props.handleClearModal}
            >
                <h1>Selected Option</h1>
                <h4>{props.selectedOption && <p>{props.selectedOption}</p>}</h4>
                <button onClick={props.handleClearModal}>Okay</button>

            </Modal>
        </div>
)


export default OptionModal