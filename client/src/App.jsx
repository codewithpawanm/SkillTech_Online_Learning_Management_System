import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/ui/Navbar";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/login";
import HeroSection from "./pages/student/HeroSection";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import { Sidebar } from "./pages/admin/Sidebar";
import CourseTable from "@/pages/admin/course/CourseTable";

import Dashboard from "./pages/admin/Dashboard";

import { AddCourse } from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";
import CourseDetail from "./pages/student/CourseDetail";
import CourseProgress from "./pages/student/CourseProgress";
import SearchPage from "./pages/student/SearchPage";
import { AdminRoute, AuthenticatedUser, ProtectedRoute } from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";

import { Fab, Webchat } from '@botpress/webchat'
import { useState } from 'react'

function app() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }
  return (
    <>
      <Webchat
        clientId="44f51c0b-9d1d-4dd2-a6cd-c35897f24573" // Your client ID here
        style={{
          width: '300px',
          height: '400px',
          display: isWebchatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '90px',
          right: '20px',
        }}
      />
      <Fab onClick={() => toggleWebchat()} style={{ position: 'fixed', bottom: '20px', right: '20px' }} />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/*Courses*/}
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element:  <AuthenticatedUser>
        <Login />
      </AuthenticatedUser>
      },

      {
        path: "my-learning",
        element:  <ProtectedRoute>
        <MyLearning />
      </ProtectedRoute>
      },
      {
        path: "profile",
        element:<ProtectedRoute>
        <Profile />
      </ProtectedRoute>
      },
      {
        path: "course/search",
        element:  <ProtectedRoute>
        <SearchPage />
      </ProtectedRoute>
      },
      {
        path: "course-detail/:courseId",
        element: (
       
          <ProtectedRoute>
          <CourseDetail />
        </ProtectedRoute>
          
        ),
      },
      {
        path: "course-progress/:courseId",
        element: ( <ProtectedRoute>
          <PurchaseCourseProtectedRoute>
          <CourseProgress />
          </PurchaseCourseProtectedRoute>
        </ProtectedRoute>)
      },
      // admin routes start from here
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Sidebar />
          </AdminRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
          {
            path: "course/:courseId/lecture",
            element: <CreateLecture />,
          },
          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />,
          },
        ],
      },

      
      
    ],

  },
]);

function App() {
  return (
    <main>
      <ThemeProvider>
      <RouterProvider router={appRouter} />

      </ThemeProvider>
    </main>
  );
}

export default App;
