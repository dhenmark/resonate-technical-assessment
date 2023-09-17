import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, Grid, Paper, Typography, useMediaQuery, useTheme} from '@mui/material'
import { Contacts, Address, Geo } from '../Interface/Contacts'

type ContactsCardProps = {
  key: number
  data: Contacts
};

export default function ContactsCards({ key, data}: ContactsCardProps) {
  const theme = useTheme()

  return (
    <Grid item key={key} xs={12} sm={12} md={6} lg={3} sx={{marginBottom:0, paddingBottom:0}} >
      <Card sx={{ backgroundColor:'rgb(240, 240, 240)', display: 'flex', height: '92%' }}>
        <Grid item xs={10} sx={{p:1, pl:2}} >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1,p:0,pb: '10px', mb: 0 }}>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '18px', fontWeight: 700, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
                    {data.name}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`ID: ${data.id}`}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`Username: ${data.username}`}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`Email Address: ${data.email}`}
            </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1,p:0,pb: '10px', mb: 0 }}>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '15px', fontWeight: 700, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
                    Address
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`Street: ${data.address?.street}`}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`Suite: ${data.address?.suite}`}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`City: ${data.address?.city}`}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`ZIP Code: ${data.address?.zipcode}`}
            </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1,p:0,pb: '10px', mb: 0 }}>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '15px', fontWeight: 700, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
                    Geolocation
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`Latitude: ${data.address?.geo?.lat}`}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '13px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`Longitude: ${data.address?.geo?.lng}`}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  
    )
  }




