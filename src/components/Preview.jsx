import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import  Divider  from '@mui/material';


function Preview() {
    return (
        <>
            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>

                    <h2>Name</h2>
                    <h4>Job Title</h4>
                    <p>
                        <span>Location</span>|<span>Email</span>|<span>Phone</span>

                    </p>
                    <p>
                        <link href={""} >GITHUB</link>|<link href={""} >LINKEDIN</link>|<link href={""} >PORTFOLIO</link>
                    </p>
                    <Divider>Summary</Divider>
                </Paper>
            </Box>
        </>
    )
}

export default Preview