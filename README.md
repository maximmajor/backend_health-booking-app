A simple application using Node.js, Mongodb, Express, Typescript that fetches hospitals
around and allows users to be able to select a hospital and book for
an appointment with a doctor.

No login process included in this task
Simple user story
1. As a user I want to book a doctor from a selected hospital.
2. I want to see a success or failure message after booking.
3. I don’t want to login but I want to include my name, phone, email,
illness type and upload my photo during the booking.
Requirement

Technologies
1. Mongodb for the database
2. Nodejs for the backend
3. Typescript

Documentation:
once you clone the project,
1. run yarn (to get all dependenciesand node modules)
2. run yarn tsc (to get the dist folder)
3. run yarn start. (to start the server)
4. you need cloudinary account so that the image upload will work. because cloudinary in used to store our imagaes
5. you need a mongodb account. check .env.example to see required environment variables

ROUTES:
1. to add list of hospitals:

    routes: localhost:3000/hospital/add

    body: {
    "hospitalName": "Adefemi Hospital",
    "address": "ikeja lagos",
    "doctorsName": "mr tomisola abigail"
}

2. to see list of hospital
    routes: localhost:3000/hospital/list

3. to see mock list of hospial
   routes: localhost:3000/hospital/list/mock
