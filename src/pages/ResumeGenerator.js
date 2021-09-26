import * as React from 'react';
import FrameworksAndLanguagesDict from '../utils/FrameworksAndLanguagesDict';
import Button from '@mui/material/Button';
import '/home/lucas/resume-generator/src/pages/ResumeGenerator.css'
import Container from '@mui/material/Container';
import Box from "@mui/material/Box"
import zIndex from '@mui/material/styles/zIndex';

function ResumeGenerator() {

    const [resumeContent, setResumeContent] = React.useState({})
    const [listOfFrameworksAndLaungauges, setListOfFrameworksAndLangauges] = React.useState(Object.keys(FrameworksAndLanguagesDict))

    function moveButton(e) {
        const page = document.getElementById("page")
        page.append(e.currentTarget)
        const button = document.getElementById(e.currentTarget.id)



        button.style.position = "absolute"
        button.style.zIndex = 1000
        const width = button.offsetWidth /2
        const height = button.offsetHeight /2

        function moveAt(clientX, clientY){
            button.style.top = clientY - height + "px"
            button.style.left = clientX - width + "px"
        }

        moveAt(e.clientX, e.clientY)

        let elemBelow

        function onMouseMove(e){
            moveAt(e.clientX, e.clientY)
        }

        document.addEventListener('mousemove', onMouseMove);

        button.onmouseup = function(e) {
            document.removeEventListener('mousemove', onMouseMove);

            button.style.zIndex = 2
            elemBelow = document.elementFromPoint(e.clientX, e.clientY)
            button.style.zIndex = 1000

            if(elemBelow.id != "dropzone" && !resumeContent.hasOwnProperty(elemBelow.id)){
                const list = document.getElementById("FrameworksAndLanguages")
                list.append(button)
            } else{
                var newObj = {}
                newObj[button.id] = e.clientY
                setResumeContent(Object.entries(Object.assign(resumeContent, newObj))
                    .sort(([,a], [,b]) => a-b)
                    .reduce((r, [k,v]) => ({...r, [k]: v}), {}))

                const temp = Object.keys(resumeContent)
                const index = temp.indexOf(button.id)

                const dropzone = document.getElementById("dropzone")

                if (index <  ( temp.length -1)){
                    const valueAfter = temp[index]
                    console.log(valueAfter)
                    const elemAfter = document.getElementById(valueAfter)
                    console.log(elemAfter)
                    dropzone.insertBefore(button, elemAfter)
                }else {
                    dropzone.append(button)
                }

                button.style.marginTop = 20
                button.style.marginBottom = 20

                newObj = {}
                console.log(dropzone)
                console.log(resumeContent)
                var rect = dropzone.getBoundingClientRect();
                newObj[button.id] = button.offsetWidth + 40 + rect.top
                setResumeContent(Object.assign(resumeContent, newObj))
                console.log(resumeContent)
            }

            button.style.position = "relative"
            button.style.top = null
            button.style.left = null

            button.onmouseup = null

          };
    }

    return (
    <div id="page" style={{position: "relative"}}>
    <Container sx={{display: "grid", gridTemplateColumns: "auto auto"}}>
        <h1>Drop the items you want in order here: </h1>
        <h1>Pick from these Frameworks and Languages: </h1>

        <Box component="span" sx={{ p: 2, border: '1px dashed grey', zIndex: 5 }} id="dropzone">
        </Box>
        <div className="FrameworksAndLanguages" id="FrameworksAndLanguages">
            {listOfFrameworksAndLaungauges.map((FrameworkOrLanguage) => {
                return <Button id={FrameworkOrLanguage} key={FrameworkOrLanguage} onMouseDown={moveButton} >{FrameworkOrLanguage}</Button>
            })}
        </div>
        </Container>
    </div>
    )
}

export default ResumeGenerator;