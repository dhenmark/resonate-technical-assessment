import { useState, useEffect } from 'react';
import { Button, Container, Typography,Grid } from '@mui/material';
import React from 'react';
import { Contacts, Address, Geo } from '../Interface/Contacts'

function ContactsPage() {
  const [contacts, setContacts] = useState<Contacts[]>();

  async function getContacts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setContacts(data);
  }

  useEffect(() => {
    getContacts()
  }, []);


  return (
    <div className="Contacts">
      <Grid container xs={12} sx={{ width: 'inherit', display: 'flex'}}>
        <Typography variant="h3">
          Contacts
        </Typography>
      </Grid>
    </div>
  );
}

export default function Contacts() {
  return (
    <ContactsPage />
  )
};
