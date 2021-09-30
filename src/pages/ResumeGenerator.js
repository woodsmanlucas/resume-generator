import * as React from 'react';
import FrameworksAndLanguagesDict from '../utils/FrameworksAndLanguagesDict';
import Button from '@mui/material/Button';
import '/home/lucas/resume-generator/src/pages/ResumeGenerator.css'
import Container from '@mui/material/Container';
import Box from "@mui/material/Box"
import { useHistory } from 'react-router-dom'

function ResumeGenerator() {

    let history = useHistory()
    const [resumeContent, setResumeContent] = React.useState({})
    const [listOfFrameworksAndLaungauges, setListOfFrameworksAndLanguages] = React.useState(Object.keys(FrameworksAndLanguagesDict))
    const [floatingButton, setFloatingButton] = React.useState(null)

    function moveButton(e) {
        const LanguageOrFramework = e.currentTarget.id
        const list = [...listOfFrameworksAndLaungauges].filter(item => item !== LanguageOrFramework)
        setListOfFrameworksAndLanguages(list)
        setFloatingButton(LanguageOrFramework)
    }

    function setUpFloatingButton(e) {
        if(floatingButton){
        const button = document.getElementById(floatingButton)

        button.style.position = "absolute"
        button.style.zIndex = 500
        const width = button.offsetWidth /2
        const height = button.offsetHeight /2

        function moveAt(clientX, clientY){
            button.style.top = clientY - height + "px"
            button.style.left = clientX - width + "px"
        }

        moveAt(e.clientX, e.clientY)

        function onMouseMove(e){
            moveAt(e.clientX, e.clientY)
        }

        document.addEventListener('mousemove', onMouseMove);
    }
    }

    function releaseButton(e) {
        const FrameworkOrLanguage = floatingButton
        setFloatingButton(null)
        console.log(e)
        console.log(e.target)

        const dropzone = document.getElementById("dropzone")
        dropzone.style.zIndex = 1000

        const elemBelow = document.elementFromPoint(e.pageX, e.pageY)

        dropzone.style.zIndex = 1
        console.log(elemBelow)

        if(elemBelow !== dropzone){
            console.log("a")
            // const list = document.getElementById("FrameworksAndLanguages")
            // list.append(e.target)
            setListOfFrameworksAndLanguages([...listOfFrameworksAndLaungauges, floatingButton])
        } else{
            var newObj = {}
            newObj[FrameworkOrLanguage] = e.pageY
            setResumeContent(Object.entries(Object.assign(resumeContent, newObj))
                .sort(([,a], [,b]) => a-b)
                .reduce((r, [k,v]) => ({...r, [k]: v}), {}))
            console.log(resumeContent)
            const resumeContentList = Object.keys(resumeContent)
            const index = resumeContentList.indexOf(FrameworkOrLanguage)
            // const dropzone = document.getElementById("dropzone")
            // if (index < temp.length && temp.length != 1){
            //     const valueAfter = temp[index -1]
            //     console.log(valueAfter)
            //     const elemAfter = document.getElementById(valueAfter)
            //     console.log(elemAfter)
            //     dropzone.insertBefore(e.target, elemAfter)
            // }else {
            //     dropzone.append(e.target)
            // }
            e.target.style.marginTop = 20
            e.target.style.marginBottom = 20
            newObj = {}
            console.log(dropzone)
            console.log(resumeContent)
            var rect = dropzone.getBoundingClientRect();
            const button = document.getElementById(FrameworkOrLanguage)
            newObj[FrameworkOrLanguage] = (index+1)*((button.offsetWidth/2) + 40) + rect.top
            setResumeContent(Object.assign(resumeContent, newObj))
            console.log(resumeContent)
        }

        e.target.style.position = "relative"
        console.log("s")
        e.target.style.top = null
        e.target.style.left = null
    }

    function goToResume() {
        history.push("/resume")
    }

    return (
    <div id="page" style={{position: "relative"}} onMouseMove={setUpFloatingButton} onMouseUp={releaseButton}>
        <Container>
        <div>
            <h1>What is my profile statement</h1>
            <input type="text" label="Profile Statement"></input>
        </div>
    <Box sx={{display: "grid", gridTemplateColumns: "auto auto"}}>
        <h1>Drop the items you want in order here: </h1>
        <h1>Pick from these Frameworks and Languages: </h1>

        <Box component="span" style={{ p: 2, border: '1px dashed grey', zIndex: 5 }} className="FrameworksAndLanguages" id="dropzone"> 
        {Object.keys(resumeContent).map((FrameworkOrLanguage) =>
                <Button id={FrameworkOrLanguage} key={FrameworkOrLanguage} onMouseDown={moveButton} onMouseUp={releaseButton}>{FrameworkOrLanguage}</Button>
            )}
        </Box>
        <div className="FrameworksAndLanguages" id="FrameworksAndLanguages">
            {listOfFrameworksAndLaungauges.map((FrameworkOrLanguage) => {
                return <Button id={FrameworkOrLanguage} key={FrameworkOrLanguage} onMouseDown={moveButton} onMouseUp={releaseButton}>{FrameworkOrLanguage}</Button>
            })}
        </div>
        </Box>
        <Button type="submit" onClick={goToResume}>Submit</Button>
        </Container>
        {floatingButton && <Button id={floatingButton} >{floatingButton}</Button>}
    </div>
    )
}

export default ResumeGenerator;