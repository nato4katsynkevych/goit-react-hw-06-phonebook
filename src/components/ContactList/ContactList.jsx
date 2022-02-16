import { ContactsItem, UlList, ButtonList } from '../style.styled'
import { useSelector, useDispatch } from 'react-redux'
import { Delete } from '../../redux/store'
export default function ContactList({ visibal, click }) {
  const dispatch = useDispatch()
  console.log(visibal)
  return (
    <ContactsItem>
      {visibal.map((select) => (
        <li key={select.id}>
          {select.name}:{select.number}
          <ButtonList onClick={() => dispatch(Delete(select.id))}>
            delete
          </ButtonList>
        </li>
      ))}
    </ContactsItem>
  )
}
