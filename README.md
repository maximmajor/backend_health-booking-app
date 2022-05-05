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

1.  to add list of hospitals:
    Request: POST
    routes: localhost:3000/hospital/add

          body: {
            "hospitalName": "Adefemi Hospital",
            "address": "ikeja lagos",
            "doctorsName": "mr tomisola abigail"

    }

2.  to see list of hospital
    Request: GET
    routes: localhost:3000/hospital/list

3.  to see mock list of hospial
    Request: GET
    routes: localhost:3000/hospital/list/mock
     
    response =>

    body: [ 
                    {
                    "hospitalName": "St. Nicholas Hospital",
                    "address": "Lagos Island",
                    "doctorsName": "mr Robert John",
                    "createdAt": "2022-05-04T10:02:33.792Z",
                    "updatedAt": "2022-05-04T10:02:33.792Z",
                    "id": "62724f39bf4bcfc90dab5079"
                    },
                    {
                    "hospitalName": "First Consultant Hospital",
                    "address": "Obalende",
                    "doctorsName": "mr william simon",
                    "createdAt": "2022-05-04T10:05:05.599Z",
                    "updatedAt": "2022-05-04T10:05:05.599Z",
                    "id": "62724fd1bf4bcfc90dab507b"
                    },
                    {
                    "hospitalName": "Eko Hospital",
                    "address": "lekki",
                    "doctorsName": "mr femi ademola",
                    "createdAt": "2022-05-04T10:06:44.515Z",
                    "updatedAt": "2022-05-04T10:06:44.515Z",
                    "id": "62725034bf4bcfc90dab507d"
                    },
                    {
                    "hospitalName": "Holy Trinity Hospital",
                    "address": "ikeja lagos",
                    "doctorsName": "mr muazu abu",
                    "createdAt": "2022-05-04T10:08:40.962Z",
                    "updatedAt": "2022-05-04T10:08:40.962Z",
                    "id": "627250a8bf4bcfc90dab5085"
                    },
                    {
                    "hospitalName": "Adefemi Hospital",
                    "address": "ikeja lagos",
                    "doctorsName": "mr tomisola abigail",
                    "createdAt": "2022-05-04T10:09:30.756Z",
                    "updatedAt": "2022-05-04T10:09:30.756Z",
                    "id": "627250dabf4bcfc90dab5087"
                    }
         
        ]


4.  to book for an appointment with a doctor.
    Request: POST
    routes: localhost:3000/users/book/appointment/:hospitalId

    please note that email must be unique to get a "success" response

           body: {
            "name": "major",
            "phonenNmber": 070.....,
            "email": "me@gmail.com",
            "illnessType": malaria ,
            "photo": .jpg
            }

    Response:
    if went through "success"
    if not "failure"
