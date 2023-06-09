import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors';

import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { GlobalStyle } from '../../style/GlobalStyle';

export default function AppHook() {
  const contacts = useSelector(getContactsList);

  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts ">
          {contacts.length !== 0 && <ContactFilter />}

          <ContactsList />
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
}
