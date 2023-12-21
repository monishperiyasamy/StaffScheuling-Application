## 🚀 Staff Scheduling App  

Staff Scheduling App – a revolutionary full-stack application that redefines staff management with microservices architecture, automatic scheduling, and the formidable security of Spring Security and JWT tokens. This project is not just a code repository; it's a testament to curiosity, excitement, and overcoming challenges, showcasing skills in microservices, Redux, protected routes, and more.  

## Unleash the Power of Scheduling 🌟  

### 🌐 Features that Spark Excitement!

### Fortified Security:

Secure login sessions with the magic of JWT tokens.    
Fortified protection with protected routes and locally safeguarded storage.

### Admin Empowerment:

**Elevate admin capabilities with exclusive actions:**

 **Dynamic Employee Management:**
Effortlessly add, edit, delete, and dazzle! Our system goes beyond the basics, bringing a touch of excellence to the employee management experience.

 **Schedule Creation Wizardry:**
Experience the magic of schedule creation with automatic conflict resolution.   
Our wizardry ensures a seamless and efficient scheduling process, saving you time and minimizing headaches.

### Employee Empowerment:

Unlock personalized dashboards for accessing profiles and weekly schedules.  
Experience empowerment through request submissions: shift swaps, time off, and profile changes.  
### 💻 Microservices Marvel  
**Microservices Architecture:**  
Embrace the efficiency of microservices for authentication, employee management, shift scheduling, and time-off requests.  
Centralized API gateway for streamlined communication, ensuring a seamless user experience.  
## 🛠 Technologies at Play  
**Frontend Fantasy:**  

Crafted with React.js, fueled by Redux for state management.  
**Backend Brilliance:**  

Node.js with Express for microservices, fortified with the security prowess of Spring Security.  
Employed JWT for authentication, ensuring a fortress around user sessions.
**Database Dynamo:**  

MongoDB serves as the bedrock for employee and scheduling data.  
## 🏗 Project Structure  
**/backend**

apigateway  
servicediscovery  
authentication  
employee  
staffschedule  
timeoff  

**/frontend**  
## 🚀 Dive into the Code  
To run Spectech locally on your machine, follow these steps:  

### Prerequisites  

Before you begin, ensure that you have the following prerequisites installed on your machine:  

- **Java Development Kit (JDK):** Spectech uses Java, so make sure you have the JDK installed. You can download it from [Oracle's website](https://www.oracle.com/java/technologies/javase-downloads.html) or use OpenJDK.  

- **Node.js:** Ensure that Node.js is installed on your machine. You can download it from [the official Node.js website](https://nodejs.org/).  

- **MySQL Database:** Spectech relies on MySQL for data storage. Install and set up MySQL on your machine. You can download MySQL from [the official MySQL website](https://dev.mysql.com/downloads/).  

**Clone the Repository:**

git clone https://github.com/monishperiyasamy/StaffScheuling-Application
  
### Frontend:  
**Navigate to Frontend:** cd frontend  
**Install Frontend Dependencies:** npm install  
**Run the Frontend Application:** npm start  
### Backend (Spring Boot)  
**Navigate to the Project Directory:** cd authenticate 
**Build and run the Spring Boot application:** ./mvnw spring-boot:run  
You can repeat similar instructions for each backend microservice, replacing "authenticate" with the respective folder names.  
### Database  
Create a MySQL database for Spectech. You can use a MySQL client or the command line to create a database.  

Update the database configuration in the backend. Open the application.properties file in the src/main/resources directory and configure the database connection properties:  

spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name  
spring.datasource.username=your_database_username  
spring.datasource.password=your_database_password  

Replace your_database_name, your_database_username, and your_database_password with your actual database information.  
### Final Steps  
With the backend server running and the React development server started, open your web browser and visit http://localhost:3000.    

You should now see and be able to interact with the Staff Scheduling application locally.  

## Project Overview:  
This initiative is driven by the goal of delving into the details of React.js and exploring frontend functionalities such as Redux and protected routes. Simultaneously, it provides an opportunity to engage with Spring Boot, master CRUD operations through REST APIs, and gain insights into microservices. The exploration encompasses various aspects, including communication between microservices, the implementation of JWT tokens, Spring Security, and the use of API gateways.  
## 🌈 Contribute to the Magic  

**🌟 Admin Decision Hub: Tomorrow's Glimpse**  

Exciting news about the Admin Decision Hub! Currently, it efficiently receives requests for shift swaps, time-offs, and profile changes in  app. Here's the teaser: forthcoming updates will introduce intelligent decision-making capabilities for accepting or denying these requests. Real-time analysis, set for the future, will ensure smooth scheduling and a visionary solution for efficient workforce management. Get ready for a magical experience where decision-making is not just seamless but strategically optimized! ✨🚀      


**Feel the thrill, explore the depths, and contribute to making the Staff Scheduling App even more powerful and user-friendly. Let's continue this adventure together!**









