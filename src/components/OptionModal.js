import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
    >
        <h2>Hello React</h2>
    </Modal>
)


export default OptionModal