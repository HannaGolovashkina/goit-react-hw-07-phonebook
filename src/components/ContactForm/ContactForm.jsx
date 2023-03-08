import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { Label, Title, Input, Button } from './ContactForm.styled';
// import { Report } from 'notiflix/build/notiflix-report-aio';

function ContactForm({ onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNunber = e => setPhone(e.currentTarget.value);

  const onSubmitForm = e => {
    e.preventDefault();

    const newElement = { name, phone };

    // contacts.some(contact => contact.name === name)
    //   ? Report.warning(
    //       `${name}`,
    //       'This user is already in the contact list.',
    //       'OK',
    //     )
    //   : 
      dispatch(addContact(newElement));

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Label>
        <Title>Name</Title>
        <Input
          onChange={onChangeName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Title>Number</Title>
        <Input
          onChange={onChangeNunber}
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </form>
  );
}

export default ContactForm;