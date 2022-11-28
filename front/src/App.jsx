import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyGroupGrid } from "./components/MyGroupGrid";
import { GroupDetails } from "./pages/GroupDetails";
import { AddUser } from "./components/AddUser";
import { AuthProvider } from "./context/authContext";
import { Auth } from "./components/Auth";
import './firebase-config'
import Navbar from "./layouts/Navbar";
import styles from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/groups",
    element: <Navbar />,
  },
  {
    path: "/singup",
    element: <AddUser/>
  },
  {
    path: "/group/:groupId",
    element: <GroupDetails/>
  },
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/mygroups",
    element: <MyGroupGrid/>
  }
]);

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Grupos</h1>
      </header>
      <main>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </main>
    </div>
  );
}
