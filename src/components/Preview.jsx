import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Preview() {
    return (
        <div style={{marginTop:'100px'}}>
            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>

                    <h2>Name</h2>
                    <h4>Job Title</h4>
                    <p>
                        <span>Location</span>|<span>Email</span>|<span>Phone</span>

                    </p>
                    <p>
                        <Link href={""} >GITHUB</Link>| 
                        <Link href={""} >LINKEDIN</Link>| 
                        <Link href={""} >PORTFOLIO</Link>
                    </p>
                    <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                    <p className='fs-5 text-start'>user summary </p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                    <h5>User Education</h5>
                    <p><span>College</span> | <span>University</span> |  <span>Year</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                    <h5>User Job</h5>
                    <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
                    <Stack spacing={2} direction="row" sx={{ flexWrap: "wrap", gap: '10px' }}>

                        <Button variant="contained">user skill</Button>

                    </Stack>


                </Paper>
            </Box>
        </div>
    )
}

export default Preview