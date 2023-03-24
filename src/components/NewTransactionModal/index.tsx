import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    //onConfirm: () => void;
}

export function NewTrannactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        >
        <h2>Cadastrar transação</h2>
    </Modal>

    );
}