import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts-slice';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Message from 'components/Message/Message';

function App() {
  // const contacts = useSelector(getContacts);
  const contactsRedux = useSelector(state => state.contacts);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container title="Contacts">
        <Filter />
        {contactsRedux.length > 0 ? <ContactList /> : <Message />}
      </Container>
    </>
  );
}

export default App;