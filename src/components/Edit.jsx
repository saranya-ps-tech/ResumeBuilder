import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen} className='btn fs-3 text-primary'><MdEditDocument /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal details */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className='d-flex  row p-3'>
                                <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                                <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                                <TextField id="standard-basic-location" label="Location" variant="standard" />

                            </div>
                        </div>
                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-email" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                            <TextField id="standard-basic-github" label="Github profile link" variant="standard" />             <TextField id="standard-basic-linkedin" label="Linkedin profile link" variant="standard" />
                            <TextField id="standard-basc-portfolio" label="Portfolio link" variant="standard" />


                        </div>
                        {/* education details */}
                        <h3>Education Details</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" />
                            <TextField id="standard-basic-university" label="University" variant="standard" />
                            <TextField id="standard-basic-year" label="Year Of Passout" variant="standard" />


                        </div>
                        {/* profesional details */}
                        <h3>Proffessional Details</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-clocation" label="Company Location" variant="standard" />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" />


                        </div>
                        {/* skill */}
                        <h3>Skill</h3>
                        <div className='d-flex  align-items-center justify-content-between  p-3'>
                            <TextField sx={{ width: '400px' }} id="standard-basic-skill" label="Add skill" variant="standard" />
                            <Button variant="text">ADD</Button>
                        </div>
                        <h5>Added Skills:</h5>
                        <div className="d-flex flex-wrap justify-content-between my-3">
                            {/* span must duplicate according to the user added skill */}
                            <span className='btn btn-outline-primary d-flex align-items-center justify-content-center'>REACT <button className='text-light btn'>X</button></span>
                        </div>
                        {/* summary */}
                        <h3>Proffessional Summary</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multilineRows={4} variant="standard" />

                        </div>
                    </Typography>
                    <Button>Update</Button>
                </Box>
            </Modal>

        </>
    )
}

export default Edit