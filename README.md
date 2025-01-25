<!DOCTYPE html>
<html>
<head>
  <title>SkillTech LMS</title>
</head>
<body>
  <h1>SkillTech LMS</h1>
  <p>
    SkillTech is a cutting-edge Learning Management System (LMS) built using the <strong>MERN stack</strong> (MongoDB, Express.js, React, and Node.js). 
    It enables tutors to upload and manage their courses, provides a comprehensive dashboard for users and admins, and integrates Stripe for secure payments. 
    This platform is designed to enhance learning experiences with features like cloud-based file storage and payment processing.
  </p>

  <h2>Overview</h2>
  <ul>
    <li><strong>Tech Stack:</strong> MERN (MongoDB, Express.js, React, Node.js)</li>
    <li><strong>Payment Integration:</strong> Stripe</li>
    <li><strong>Features:</strong> Tutor course uploads, secure payments, dynamic dashboards</li>
  </ul>

  <h2>Features</h2>
  <ul>
    <li>Authentication: Secure login and registration</li>
    <li>Course Management: Tutors can upload, update, and delete their courses</li>
    <li>Dashboard: Real-time data visualization for users and admins</li>
    <li>Stripe Integration: Safe and seamless payment processing</li>
    <li>Cloudinary Integration: Cloud-based storage for images and videos</li>
    <li>Responsive Design: Optimized for both desktop and mobile devices</li>
  </ul>

  <h2>Installation</h2>
  <h3>1. Prerequisites</h3>
  <p>Ensure the following are installed on your system:</p>
  <ul>
    <li>Node.js</li>
    <li>MongoDB (local or hosted, e.g., MongoDB Atlas)</li>
    <li>A Cloudinary account for media storage</li>
    <li>A Stripe account for payment processing</li>
  </ul>

  <h3>2. Clone the Repository</h3>
  <pre><code>git clone https://github.com/your-username/SkillTech.git</code></pre>
  <pre><code>cd SkillTech</code></pre>

  <h3>3. Install Dependencies</h3>
  <p>Navigate to both the <code>client</code> and <code>server</code> folders and install dependencies:</p>
  <pre><code>
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
  </code></pre>

  <h3>4. Create a .env File</h3>
  <p>Create a <code>.env</code> file in the <code>server</code> folder with the following content:</p>
  <pre><code>
PORT=5000
MONGO_URI=your-mongodb-uri
SECRET_KEY=your-secret-key

# Cloudinary setup
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret
CLOUD_NAME=your-cloudinary-cloud-name

# Stripe setup
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
WEBHOOK_ENDPOINT_SECRET=your-webhook-endpoint-secret
FRONTEND_URL=your-frontend-url
  </code></pre>

  <h3>5. Start the Development Server</h3>
  <p>Start the frontend and backend servers:</p>
  <pre><code>
# Start the client
cd client
npm start

# Start the server
cd ../server
npm run dev
  </code></pre>

  <h3>6. Access the Application</h3>
  <p>Open your browser and visit <code>http://localhost:3000</code> to view the application.</p>

  <h2>Contributing</h2>
  <p>Contributions are welcome! Please fork the repository and create a pull request for major changes. Ensure your changes are well-documented.</p>

  <h2>License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>.</p>
</body>
</html>
