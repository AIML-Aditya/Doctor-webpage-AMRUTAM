Task 5: Doctor Web
Developer: Aditya Sahu
Tech Stack Used: React + React Router + TailwindCSS + React Helmet

A responsive Doctor Appointment Booking Web App built using **React + TailwindCSS + React Router + React Helmet

 Features

- Browse doctor profiles
- View specialty, experience, rating
- Book an appointment form
- Login & Register Pages
- Dashboard & Appointment history pages
- Reusable components
- SEO optimized pages using Helmet
- Responsive UI with TailwindCSS

  Tech Stack
  
React, React Router, TailwindCSS, React Helmet

 Installation & Run Locally

bash
git clone https://github.com/AIML-Aditya/Doctor-webpage-AMRUTAM/
cd doctor-portal
npm install
npm run dev


Project will run at the localhost URL shown in terminal.


1 Objective
To build a modern and responsive Doctor Appointment Booking Portal where users can:
• Browse doctors by specialty
• View doctor profiles
• Book appointments
• Log in to view dashboard & history

2 Architecture & Routing
Used React Router DOM for SPA navigation:
Page       Route
          
Home/
About/about
Services/services
Doctors listing/doctors
Doctor Profile/doctors/:id
Book Appointment /book
Login/Register
Dashboard/login/dashboard
Appointment History /appointments
Contact/contact

3 SEO & Accessibility
Used React Helmet for dynamic SEO:
• Custom titles & meta descriptions per page
• Canonical tags
• Proper semantic HTML
• alt attributes for all images
• ARIA labels in forms
This improves:
• Indexability
• Screen reader support
• Digital accessibility

4 Responsive UI Design
I used TailwindCSS for:
• Mobile-first design
• Quick consistent styling
• Adaptive navigation bar + mobile menu
Screens work well on:
Mobile |  Desktop |  Large screens

5  Data Handling

Doctors data stored in array

Later can be replaced with API / database
Form submissions simulate backend actions using navigation + alerts.

6 Component Design Approach
• Navbar + Footer used across pages
• Components separated clearly based on functionality
• Clean state management via useState() and props
Ensures maintainability and scalability.

7 Security Considerations 
Future enhancements planned:
• JWT Auth (Secure login)
• Form validation + sanitization
• API-based booking system
• Patient health data encryption
Shows that I understand real-world project needs.
