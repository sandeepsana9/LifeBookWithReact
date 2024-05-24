import React from 'react'
import '../../css/reactjs/Introduction.css'
const CreateReactApp = () => {
  return (
    <div className='main-container'>
      <h1>Create React App</h1>
      <p>Starting a new React project is very complicated, with so many build tools. it uses many dependencies, configuration files, and other requirements such as Babel, Webpack, ESLint before writing a single line of React code. Create React App CLI tool removes all that complexities and makes React app simple. For this, you need to install the package using NPM, and then run a few simple commands to get a new React project.</p>
      <h1>Check Node Version (node -v)</h1>
      <p>C:\Users\sandeepsana&gt; node -v</p>
      <h1>Check Npm Version (npm -v)</h1>
      <p>C:\User\sandeepsana&gt; npm -v</p>
      <h1>Install React (npm install -g create-react-app)</h1>
      <p>C:\User\sandeepsana&gt; npm install -g create-react-app</p>
      <h1>Create a new React project (create-react-app projectName)</h1>
      <p>C:\User\sandeepsana&gt; create-react-app projectName</p>
      <span>OR</span>
      <p>C:\User\sandeepsana&gt; npx create-react-app projectName</p>
      <h1>Run your project (npm start)</h1>
      <p>C:\User\sandeepsana&gt; cd projectName</p>
      <p>C:\User\sandeepsana&gt; npm start</p>
    </div>
  )
}

export default CreateReactApp