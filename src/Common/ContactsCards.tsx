import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Card, CardContent, Grid, Paper, Typography, useMediaQuery, useTheme} from '@mui/material'
import { Contacts, Address, Geo } from '../Interface/Contacts'

type ContactsCardProps = {
  key: number
  data: Contacts
};

export default function CameraCards({ key, data}: ContactsCardProps) {
 // const { getShelfCameraList, getShelfCameraSection, getShelfCameraData } = useDevice()
  const navigate = useNavigate()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid item key={key} xs={12} sm={6} md={4} lg={4} sx={{marginBottom:0, paddingBottom:0}} >
      <Card sx={{ backgroundColor:'white',display: 'flex', height: '80%' }}>
        <Grid item xs={10} sx={{p:1, pl:2}} >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1,p:0,pb: '10px', mb: 0 }}>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '12px', fontWeight: 700, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
                    {data.name}
            </Typography>
            <Typography sx={{ fontStyle: 'OpenSans', fontSize: '12px', fontWeight: 400, overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap', }}>
            {`Located In: ${data.address?.city}`}
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  
    )
  }




