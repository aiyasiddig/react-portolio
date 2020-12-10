import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Projects(props) {
  return (
    <div>
      <h1>My Projects</h1>
      <Thumbnail
        link="/https://aiyasiddig.github.io/CodeQuiz/"
        image="https://raw.githubusercontent.com/aiyasiddig/CodeQuiz/main/codequizdemo.PNG"
        title="Code Quiz"
      />
      <Thumbnail
        link="https://aiyasiddig.github.io/employee-directory/"
        image="https://user-images.githubusercontent.com/65461462/100174875-28cbc080-2e82-11eb-8491-0c44f8e6a843.PNG"
        title="Employee Directory"
      />
      <Thumbnail
        link="https://safe-space-2020.herokuapp.com/"
        image="https://github.com/Toogii2019/safe_space/raw/master/image/safe-space-login.png"
        title="Safe Space"
      />
      <Thumbnail
        link="https://still-lake-37486.herokuapp.com/"
        image="https://user-images.githubusercontent.com/65461462/101839741-c1f00d80-3af7-11eb-8292-06c6152d9454.PNG"
        title="Tasty Trivia"
      />
      <Thumbnail
        link="https://aiyasiddig.github.io/WeatherApp/"
        image="https://user-images.githubusercontent.com/65461462/90581416-0853e200-e180-11ea-805e-d7a330dc9041.PNG"
        title="Weather Dashboard"
      />
      <Thumbnail className = "readme"
        link="https://github.com/aiyasiddig/goodReadMe"
        image="https://user-images.githubusercontent.com/65461462/101839693-abe24d00-3af7-11eb-8f9f-cda5d72f3966.png"
        title="README Generator"
      />
    </div>
  )
}
 
export default Projects;