# React-MUI-TS-Templates

## Collection of functional components for ReactJS, based on MaterialUI and Typescript.

My goal is to build some standard components with a maximum of build-in functionality, while keeping fully reusable.

First component is a signup-component, which contains a UI with email, password and confirm-password fields.
The email is verified, and the password is verified by containing uppercase, lowercase, number, specialchar and length.
As properties for this component has to be a function for recieving the email and password, and gives the language. (until now, english and german are integrated, easy upgradeable)

`<SignUp onSubmit={(email:String, password:String)=>void} language={"de"|"en"}/>`
