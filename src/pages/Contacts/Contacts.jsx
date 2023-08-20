import { Form } from "../../components/Form/Form";
import { ListContacts } from "../../components/ListContacts/ListContacts";
import { Filtration } from "../../components/Filtration/Filtration";
import {Container,
  FirstTitle,
  SecondTitle,
  Breaker,
  Message,} from '../../components/App.styled';
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectVisibleContacts, selectLoading,selectError } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const Contacts =()=> {
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)
  const filteredContacts = useSelector(selectVisibleContacts)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchContacts());
  },[dispatch]);

    return(
      <>
      <Container>
        <FirstTitle>Phonebook</FirstTitle>
        <Form />
        <SecondTitle>Contacts</SecondTitle>
        <Breaker>
          {contacts.items.length > 0 ? (
            <>
              <Filtration/>
              {isLoading&&<p>Loading, wait...</p>}
              {error&&<p>{error}</p>}
              {filteredContacts.length > 0?(
                <ListContacts/>
            
          ):(
            <Message>
              Sorry, we didn't find any contacts matching your query
            </Message>
          )}
          </>
          ):(
            <Message>You don't have any contacts yet</Message>
          )}
        </Breaker>
      </Container>
      </>
    );
};

export default Contacts;