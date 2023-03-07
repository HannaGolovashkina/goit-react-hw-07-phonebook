import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import {
  Wrapper,
  StyledLink,
  ImageWrapper,
  Photo,
  PersonalData,
  Name,
  Number,
  Label,
  LocalData,
  ButtonWrapper,
  Button,
} from './Contact.styled';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import useShowModal from 'hooks/useShowModal';
import DeletingContact from 'components/DeletingContact/DeletingContact';

function Contact({ id, name, phone,  photo }) {
  const { showModal, togleModal } = useShowModal(false);

  const navigate = useNavigate();
  const openEditPage = () => navigate(`/contacts/${id}/edit`);

  return (
    <>
      {showModal && (
        <Modal onClose={togleModal} title={name}>
          <DeletingContact id={id} name={name} togleModal={togleModal} />
        </Modal>
      )}

      <Wrapper>
        <StyledLink to={`/contacts/${id}`}>
          <ImageWrapper>
            <Photo src={photo} alt={name} />
          </ImageWrapper>
          <PersonalData>
            <Name>{name}</Name>
            <Number>
              <Label>Phone: </Label>
              {phone}
            </Number>
           
          </PersonalData>
        </StyledLink>
        <ButtonWrapper>
          <Button type="button" onClick={togleModal}>
            <FaTrash />
          </Button>
          <Button type="button" onClick={openEditPage}>
            <FaUserEdit />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default Contact;