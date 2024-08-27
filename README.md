# Student Management System API

The Student Management System API is a backend application developed using Node.js, Express, and MongoDB. It provides functionalities for managing students and departments, allowing users to perform CRUD (Create, Read, Update, Delete) operations on both students and departments.

 **Features**

- **Student Management**
  - Add new students
  - Retrieve all students
  - Retrieve students by department
  - Delete students

- **Department Management**
  - Add new departments
  - Retrieve all departments
  - Delete departments

 **Technologies Used**

- Node.js
- MongoDB
- Mongoose (for MongoDB object modeling)
- Postman (for testing the API)


**Steps to Set Up the Project**

1. **Clone the Repository:**
   - Open your terminal and run the following command to clone the repository to your local machine:
     
     git clone <repository-url>

   - Replace `<repository-url>` with the actual URL of your GitHub repository.

2. **Navigate to the Project Directory:**
   - Change to the project directory using the following command:
   
     cd <project-directory>
     
   - Replace `<project-directory>` with the name of the folder where the project is located.

3. **Install Node.js and MongoDB:**
   - You can check if Node.js is installed by running:
     node -v
    
   - For MongoDB, ensure that the MongoDB service is running. You can start it with the following command (assuming MongoDB is installed):
     mongod
     

4. **Install Dependencies:**
   - Run the following command to install the required dependencies listed in the `package.json` file:
    
     npm install
   

5. **Set Up MongoDB Database:**
   - Open your MongoDB client (like MongoDB Compass or the MongoDB shell) and create a new database for the project if you haven't done so already.
   - Note the database name you create as it may be required in the application.

6. **Configure Environment Variables:**
   - If your project uses environment variables (e.g., for the MongoDB connection string), create a `.env` file in the project root directory.
   - Add the necessary configuration, for example:
     
     MONGODB_URI=mongodb://localhost:27017/yourDatabaseName

7. **Run the Server:**

     node app.js or node run dev

8. **Testing the API:**
   
   - Set the request method (GET, POST, DELETE) according to the operation you want to perform.



**Snapshots**

1.**Add the student**
![image](https://github.com/user-attachments/assets/6665a7eb-8f8c-409a-bb47-b722bd149c76)

2.**list the students**
![Screenshot 2024-08-27 080616](https://github.com/user-attachments/assets/9f59009c-83d4-4a2b-86b3-296bff0c1abb)


3.**search by name**
![image](https://github.com/user-attachments/assets/80991fae-32a3-4378-bff2-beb5429f2786)

4.**delete the student**
![Screenshot 2024-08-27 075343](https://github.com/user-attachments/assets/eff7f8ae-6db9-441a-85ee-b94b9cb0786a)

5.**add the department**
![Screenshot 2024-08-27 074834](https://github.com/user-attachments/assets/8f3fa2a1-799d-4dd4-92f6-2ddcd0ad94b6)

6.**list the department**
![Screenshot 2024-08-27 075141](https://github.com/user-attachments/assets/30890cb1-2a25-43ac-b774-51ba0adf73c6)

7.**delete the department**
![Screenshot 2024-08-27 074538](https://github.com/user-attachments/assets/42613eee-7fe4-45aa-9d9d-5bfc743a81c9)





 
