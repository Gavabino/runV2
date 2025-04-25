import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
    width: calc(100% - 8px);
    height: 30%;
    margin: var(--spacing-xxs);
    background: rgba(211, 211, 211, 0.4);
    border-radius: 10px;
    border-color: var(--grey);
    border-style: solid;
    transition: background 0.2s;

    &:hover {
        background: rgba(211, 211, 211, 1);
    }
    
    &:active {
        background: rgba(128, 128, 128, 0.5);
    }
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: var(--font-l);
    opacity: 1;
`;

const AddButton = () => {
    return (
        <Button>
            <Icon icon={faPlus} />
        </Button>
    );
};

export default AddButton;