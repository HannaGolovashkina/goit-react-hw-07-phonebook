import { useSelector } from 'react-redux';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Message from 'components/Message/Message';

function App() {

  const contactsRedux = useSelector(state => state.contacts);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container title="Contacts">
        <Filter />
        {contactsRedux.length === 0 ? <Message /> :<ContactList />}
      </Container>
    </>
  );
}

export default App;