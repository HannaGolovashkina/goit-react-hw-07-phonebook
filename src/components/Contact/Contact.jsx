// import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts-slice';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { Wrapper, Icon, Number, Button } from './Contact.styled';

export const Contact =({ name, number,id })=> {
  const [deleteContact, { isLoading: isAdding, isSuccess }] =
    useDeleteContactMutation();
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{number}</Number>
        <Button type="button" onClick={() => deleteContact(id)}>
          <FaTrash />
        </Button>
      </Wrapper>
    </>
  );
}

// Contact.prototype = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default Contact;