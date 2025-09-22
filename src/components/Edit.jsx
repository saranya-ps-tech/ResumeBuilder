import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField } from '@mui/material';
import { editResumeAPI, getAResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';

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

function Edit({ resumeId,setUpdateUserInput }) {
    const [userSkill, setUserSkill] = React.useState("")
    const [userInput, setUserInput] = React.useState({})
    const [open, setOpen] = React.useState(false);
    //console.log(resumeId);
    console.log(userInput);
    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, [resumeId])

    const getEditResumeDetails = async () => {
        try {
            const result = await getAResumeAPI(resumeId)
            setUserInput(result?.data)
        }
        catch (err) {
            console.log(err);

        }
    }
    const addSkill = () => {
        if (userSkill) {
            if (userInput.skills.includes(userSkill)) {
                alert('Given skill already existing!!! add another.')
            }
            else {
                //userInput.skills.push(inputSkill)
                setUserInput({ ...userInput, skills: [...userInput.skills, userSkill] })
            }
            //to clear add skill textbox
            setUserSkill('')
        }
    }


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter((item) => item != skill) })
  }

const handleResumeUpdate=async()=>{
    try{
        const result=await editResumeAPI(userInput?.id,userInput)
        setUpdateUserInput(result?.data)
        swal("Success!", "Resume updated successfully!", "success");
        handleClose()
    }
    catch(err){
        console.log(err);
        
    }
}

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
                                <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, name: e.target.value } })} value={userInput?.personelData?.name} />
                                <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, jobTitle: e.target.value } })} value={userInput?.personelData?.jobTitle} />
                                <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, location: e.target.value } })} value={userInput?.personelData?.location} />
                            </div>
                        </div>
                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, email: e.target.value } })} value={userInput?.personelData?.email} />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, phone: e.target.value } })} value={userInput?.personelData?.phone} />
                            <TextField id="standard-basic-github" label="Github profile link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, github: e.target.value } })} value={userInput?.personelData?.github} />
                            <TextField id="standard-basic-linkedin" label="Linkedin profile link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, linkedin: e.target.value } })} value={userInput?.personelData?.linkedin} />
                            <TextField id="standard-basc-portfolio" label="Portfolio link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, portfolio: e.target.value } })} value={userInput?.personelData?.portfolio} />

                        </div>
                        {/* education details */}
                        <h3>Education Details</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} value={userInput?.education?.course} />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} value={userInput?.education?.college} />
                            <TextField id="standard-basic-university" label="University" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput?.education?.university} />
                            <TextField id="standard-basic-year" label="Year Of Passout" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} value={userInput?.education?.year} />

                        </div>
                        {/* profesional details */}
                        <h3>Proffessional Details</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput?.experience?.jobRole} />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput?.experience?.company} />
                            <TextField id="standard-basic-clocation" label="Company Location" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput?.experience?.jobLocation} />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput?.experience?.duration} />

                        </div>
                        {/* skill */}
                        <h3>Skill</h3>
                        <div className='d-flex  align-items-center justify-content-between  p-3'>
                            <TextField onChange={e => setUserSkill(e.target.value)} sx={{ width: '400px' }} id="standard-basic-skill" label="Add skill" variant="standard" value={userSkill} />
                            <Button onClick={addSkill} variant="text">ADD</Button>
                        </div>

                        <h6>Selected Skills</h6>
                        {/* span must duplicate according to the user added skill */}

                        <div className='d-flex my-4 flex-wrap'>
                            {
                                userInput?.skills?.length > 0 &&
                                userInput?.skills?.map(item => (<span className='btn btn-outline-primary d-flex align-items-center justify-content-center'>{item} <button onClick={()=>removeSkill(item)} className='text-light btn'>X</button></span>))
                            }
                        </div>


                        {/* summary */}
                        <h3>Proffessional Summary</h3>
                        <div className='d-flex  row p-3'>
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself" rows={4} variant="standard" onChange={e => setUserInput({ ...userInput, summary: e.target.value })} value={userInput?.summary} />

                        </div>
                    </Typography>
                    <Button onClick={handleResumeUpdate}>Update</Button>
                </Box>
            </Modal>

        </>
    )
}

export default Edit