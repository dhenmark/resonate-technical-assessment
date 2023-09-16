import { useState, useEffect } from 'react';
import { Button, Container, Typography, Grid, Box, InputAdornment, TextField, Pagination } from '@mui/material';
import { FilterAltOutlined, ImageNotSupportedOutlined, Search } from '@mui/icons-material'
import React from 'react';
import { Contacts, Address, Geo } from '../Interface/Contacts'
import ContactsCards from '../Common/ContactsCards'

function ContactsPage() {
  const [contacts, setContacts] = useState<Contacts[]>();
  const [filteredContacts, setFilteredContacts] = useState<Contacts[]>();
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedContacts, setPaginatedContacts] = useState<Contacts[]>();

  async function getContacts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setContacts(data);
  }

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
    setCurrentPage(1);
  };

  const cardsPerPage = 3
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  useEffect(() => {
    if (filteredContacts) {
      const data = filteredContacts.slice(startIndex, endIndex) || [];
      setPaginatedContacts(data);
    }
  }, [filteredContacts, currentPage]);

  useEffect(() => {
    getContacts()
  }, []);

  useEffect(() => {
    const filterdData = contacts?.filter((data) => {
      return (
        data.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        data.username?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        data.email?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        data.address?.street?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        data.address?.suite?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        data.address?.city?.toLowerCase().includes(searchValue?.toLowerCase())
      )
    })
    setFilteredContacts(filterdData)
  }, [searchValue])


  return (
    <div className="Contacts">
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="15vh">
        <Typography variant="h4" >
          Contacts Page
        </Typography>
      </Box>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="normal">
        <Typography variant="subtitle1" >
          Try to search your contacts here
        </Typography>
      </Box>
      <Box         
        display="flex" 
        justifyContent="center" 
        alignItems="normal"
        padding={2}
        >
        <TextField
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={handleSearchChange}
          sx={{
            width: '20', '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
              py: '13px'
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Grid container spacing={4}>
          {
            filteredContacts?.slice(startIndex, endIndex).map((x: any, index: any) => (
              <ContactsCards key={index} data={x} />
            ))
          }
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination count={Math.ceil((filteredContacts?.length ?? 0) / cardsPerPage)} page={currentPage} onChange={handlePageChange} />
      </Box>
    </div>
  );
}

export default function ContactsRoute() {
  return (
    <ContactsPage />
  )
};
