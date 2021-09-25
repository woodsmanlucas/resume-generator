import * as React from 'react';
import FrameworksAndLanguagesDict from '../utils/FrameworksAndLanguagesDict';
import Button from '@mui/material/Button';
import '/home/lucas/resume-generator/src/pages/ResumeGenerator.css'
import Container from '@mui/material/Container';
import Box from "@mui/material/Box"

function ResumeGenerator() {

    const [mouseX, setMouseX] = React.useState(0)
    const [mouseY, setMouseY] = React.useState(0)
    const [listOfFrameworksAndLaungauges, setListOfFrameworksAndLangauges] = React.useState(Object.keys(FrameworksAndLanguagesDict))


    function moveButton(e) {
        console.log(e)
        e.currentTarget.style.position = "absolute"
    }


    return (
    <Container sx={{display: "grid", gridTemplateColumns: "auto auto"}}>
        <h1>Drop the items you want in order here: </h1>
        <h1>Pick from these Frameworks and Languages: </h1>

        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
        </Box>
        <div className="FrameworksAndLanguages">
            {listOfFrameworksAndLaungauges.map((FrameworkOrLanguage) => {
                return <Button key={FrameworkOrLanguage} onMouseDown={moveButton} >{FrameworkOrLanguage}</Button>
            })}
        </div>
        </Container>
    )
}

export default ResumeGenerator;