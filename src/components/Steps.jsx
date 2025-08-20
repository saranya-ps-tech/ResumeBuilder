import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function Steps() {
  const skillSuggestionArray = ['NODE JS', 'EXPRESS', 'MONGODB', 'REACT', 'ANGULAR', 'NEXT JS', 'BOOTSTRAP', 'TAILWIND', 'CSS', 'GIT']

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  //state for storing user input data
  const [userInput, setUserInput] = React.useState({
    personelData: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: ''
    },
    education: {
      course: '',
      college: '',
      university: '',
      year: '',

    },
    experience: {
      jobRole: '',
      company: '',
      jobLocation: '',
      duration: '',

    },
    skills: [],
    summary: ''
  })

  const userSkillRef = React.useRef()

  //console.log(userInput);


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  //add skill
  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (userInput.skills.includes(inputSkill)) {
        alert('Given skill already existing!!! add another.')
      }
      else {
        //userInput.skills.push(inputSkill)
        setUserInput({ ...userInput, skills: [...userInput.skills, inputSkill] })
      }
    }

  }
  // remove skill
  const removeSkill = (skill) => {
    setUserInput({...userInput,skills: userInput.skills.filter((item) => item != skill)})
  }


  //render the content corresponding array index
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className='d-flex  row p-3'>
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, name: e.target.value } })} value={userInput.personelData.name} />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, jobTitle: e.target.value } })} value={userInput.personelData.jobTitle} />
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, location: e.target.value } })} value={userInput.personelData.location} />

          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className='d-flex  row p-3'>
            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, email: e.target.value } })} value={userInput.personelData.email} />
            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, phone: e.target.value } })} value={userInput.personelData.phone} />
            <TextField id="standard-basic-github" label="Github profile link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, github: e.target.value } })} value={userInput.personelData.github} />
            <TextField id="standard-basic-linkedin" label="Linkedin profile link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, linkedin: e.target.value } })} value={userInput.personelData.linkedin} />
            <TextField id="standard-basc-portfolio" label="Portfolio link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, portfolio: e.target.value } })} value={userInput.personelData.portfolio} />


          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className='d-flex  row p-3'>
            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} value={userInput.education.course} />
            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} value={userInput.education.college} />
            <TextField id="standard-basic-university" label="University" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput.education.university} />
            <TextField id="standard-basic-year" label="Year Of Passout" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} value={userInput.education.year} />


          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Proffessional Details</h3>
          <div className='d-flex  row p-3'>
            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput.experience.jobRole} />
            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput.experience.company} />
            <TextField id="standard-basic-clocation" label="Company Location" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput.experience.jobLocation} />
            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput.experience.duration} />


          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills Details</h3>
          <div className='d-flex  align-items-center justify-content-between  p-3'>
            {/* <TextField ref={userSkillRef} sx={{ width: '400px' }} id="standard-basic-skill" label="Add skill" variant="standard" /> */}
            <input ref={userSkillRef} type="text" className="form-control" placeholder='Add Skills' />

            <Button onClick={() => addSkill(userSkillRef.current.value)}
              variant="text">ADD</Button>
          </div>
          <h5>Suggestion:</h5>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkill => (
                <Button onClick={() => addSkill(userSkill)} className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
          <h5>Added Skills:</h5>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {/* span must duplicate according to the user added skill */}
            {
              userInput.skills.length > 0 ?
                userInput.skills.map(skill => (
                  <span key={skill} className='btn btn-primary d-flex align-items-center justify-content-center my-1'>
                    {skill} <button onClick={() => removeSkill(skill)} className="text-light btn ">X</button>
                  </span>
                ))
                :
                <span>NIL</span>

            }

          </div>
        </div>
      )
      case 5: return (
        <div>
          <h3>Proffessional Summary</h3>
          <div className='d-flex  row p-3'>
            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multilineRows={4} defaultValue={'A MEAN Full Stack Developer is someone who can design, build, and deploy complete web applications using MongoDB, Express.js, Angular, and Node.js, handling everything from UI to database in one tech stack.'} variant="standard" onChange={e => setUserInput({ ...userInput, summary: e.target.value })} value={userInput.summary} />


          </div>
        </div>
      )

      default: return null

    }

  }

  return (

    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of eact step */}
          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}


export default Steps