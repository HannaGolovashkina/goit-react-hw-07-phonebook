import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Message from 'components/Message/Message';
import { useGetContactsQuery } from 'redux/contact-api';

function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <Container title="Contacts">
      <Filter />
      {!data || data.length === 0 ? <Message /> : <ContactList />}
    </Container>
  );
}

export default ContactsPage;