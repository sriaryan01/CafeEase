# CafeEase - Restaurant Management System
CafeEase is a full-stack restaurant management system designed to streamline and optimize restaurant operations. The project leverages a Spring Boot backend and a ReactJS frontend to provide a robust, scalable, and user-friendly solution.

## Features:
- ### Role-Based Access Control ### 
   Roles such as Admin and User are defined with specific permissions and restrictions.

   Access control is implemented on both the frontend and backend, ensuring a secure and seamless experience for users.


- ### Error Handling
   Comprehensive error handling ensures the system remains stable and user-friendly.

   Clear and actionable error messages guide users to resolve issues effectively.


- ### Real-Time Email Notifications
   Users receive instant email notifications for critical actions, such as order confirmations, account activation, or password recovery.


- ### Toast Notifications
  Interactive toast notifications provide immediate feedback for user actions, ensuring clarity and responsiveness in the application.

- ### Interactive User Interface
  Material-UI and custom CSS deliver a visually appealing and intuitive UI.
The design is fully responsive, offering a seamless experience across devices.


## Technology Stack

### Frontend
- #### ReactJS
  - State management for dynamic components.
  - Material-UI for consistent and responsive UI elements.
  - Toast notifications for user feedback.
### Backend
- #### Spring Boot
   - RESTful APIs to handle data and business logic.
   - Role-based security using Spring Security.
   - Email notifications using JavaMailSender.
### Database
- #### MySQL
   - Stores and manages data such as user roles, orders, and restaurant details.
### Other Tools
- #### GitHub for version control.
- #### Postman for API testing.


## Installation
### Databse :
### 1. Use the command below to create a new database with the name "cafedb" in MySQL
```
CREATE DATABASE cafedb;
```
### Backend :
#### 1. Clone the repository:
  ```
git clone https://github.com/username/cafeease-backend.git 
``` 
#### 2. Navigate to the project directory and build the application:
```
cd cafeease-backend  
mvn clean install  
```
#### 3. Configure the database connection in application.properties.

#### 4. Run the Spring Boot application

### Frontend :
#### 1. Clone the repository:
```
git clone https://github.com/Adars987h/cafeEase_UI.git 
```
 
#### 2. Navigate to the project directory and install dependencies:
```
npm install  
```
#### 3. Start the development server:
```
npm start 
```
### Usage
1. Access the application at ```http://localhost:3000```.
2. Login using your role-specific credentials.
3. Navigate through the system to manage restaurant operations such as user management,
 inventory management, placing oreders, generating bills.

### Screenshots
Login Page with Role-Based Authentication

Dashboard Overview

User-Friendly Product Management System

Real-Time Notifications with Toaster Popups
### Contributing
Contributions are welcome! Please create a pull request with your changes.
