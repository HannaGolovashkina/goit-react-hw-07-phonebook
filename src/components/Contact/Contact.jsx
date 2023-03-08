import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { Wrapper, Icon, Number, Button } from './Contact.styled';

function Contact({ name, phone, onClick }) {
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{phone}</Number>
        <Button type="button" onClick={onClick}>
          <FaTrash />
        </Button>
      </Wrapper>
    </>
  );
}


export default Contact;