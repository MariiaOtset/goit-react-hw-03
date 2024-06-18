// import { useState } from 'react'
import "./App.css";
import { ContactForm, SearchBox, ContactList } from "components";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
