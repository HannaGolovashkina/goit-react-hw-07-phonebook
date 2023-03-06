// import { useState } from 'react';
import { Label, Title, Input, Button } from './ContactForm.styled';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsOperations';


const ContactForm = ({
  initialValues = { name: '', number: '' },
  onSubmit,
  btnText,
}) => {
  const onHandleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
// )=> {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

  // const onChangeName = e => setName(e.currentTarget.value);
  // const onChangeNunber = e => setNumber(e.currentTarget.value);

  // const contacts = useSelector(addContact);
  // const dispatch = useDispatch();

  // const onSubmitForm = async (values, actions) => {
  //   e.preventDefault();
    // const newElement = { id: nanoid(), name, number };
    // contacts.some(contact => contact.name === name)
      // ? Report.warning(
      //     `${name}`,
      //     'This user is already in the contact list.',
      //     'OK',
      //   )
  //     // : 
  //     dispatch(addContact({name, number}));
  //   reset();
  //   onClose();
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };
  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  
  return (
    <form onSubmit={onHandleSubmit}>
      <Label>
        <Title>Name</Title>
        <Input
          onChange={onSubmit}
          type="text"
          name="name"
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Title>Number</Title>
        <Input
          onChange={onSubmit}
          type="tel"
          name="number"
          // value={number}
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