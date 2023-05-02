import { Item, Div, ContactName, DeleteButton } from "./ContactItem.styled";

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  console.log(id);
  return (
      <Item>
          <Div />
      <ContactName>{name}</ContactName>
      <p>{number}</p>
      <DeleteButton
        type="button"
        onClick={() => {onDeleteContact(id)}}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};
