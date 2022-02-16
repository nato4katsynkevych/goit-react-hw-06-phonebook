import React, { useEffect } from 'react'
import '../style.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import ContackForm from './contactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, Delete, Fil } from '../redux/store'
function App() {
  // const [contacts] = useState(
  //   JSON.parse(localStorage.getItem('Контакты')) || [],
  // )

  const dispatch = useDispatch()

  let select = useSelector((state) => state.user.login)
  let fil = useSelector((state) => state.user.filter)
  console.log()

  const submitForm = ({ name, number }) => {
    if (test(name.toLowerCase())) {
      return alert(`${name} уже есть`)
    }
    localStorage.setItem('Контакты', JSON.stringify(select))
    dispatch(logIn({ id: nanoid(), name, number }))
  }
  const changeFilter = (e) => {
    dispatch(Fil(e.target.value))
  }
  const clickDelete = (e) => {
    dispatch(Delete(e))
  }

  const test = (data) => {
    return select.some((item) => {
      return item.name.toLowerCase() === data
    })
  }

  localStorage.setItem('Контакты', JSON.stringify(select))
  const visibal = select.filter((sel) => {
    return sel.name.toLowerCase().includes(fil.toLowerCase())
  })

  return (
    <>
      <ContackForm submitForm={submitForm} />

      <Filter value={fil} onChange={changeFilter} />

      <ContactList visibal={visibal} click={clickDelete} />
    </>
  )
}

export default App
