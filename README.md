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
![image](https://github.com/user-attachments/assets/5e268239-5ea0-496f-ac93-699639e5780b)

2.**list the students**
![image](https://github.com/user-attachments/assets/2894f397-6d2d-4296-9046-d7150f28ad79)

3.**search by name**
![image](https://github.com/user-attachments/assets/80991fae-32a3-4378-bff2-beb5429f2786)

 
