import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Main from "./main/Main";

interface GlobalContextType {
  setActiveNavigation: any;
  activeNavigation: any;
  navigations: any;
  setNavigations: any;
  breadcrumbs: any;
  setBreadcrumbs: any;
  breadCrumbsLoading: any;
  setBreadCrumbsLoading: any;
  handleBreadCrumbsLoading: any;
  userDetails: any;
  setUserDetails: any;
  searchProductBy: string;
  setSearchProductBy: any;
  activeLoginDialog: any;
  setActiveLoginDialog: any;
  activeSignupDialog: any;
  setActiveSignupDialog: any;
  activeResetDialog: any;
  setActiveResetDialog: any;
}
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);
export const useGlobalContext = (): any => useContext(GlobalContext)!;

declare global {
  interface Window {
    gtag: any;
  }
}

function App() {
  const [currentTheme] = useState<"light" | "dark">("dark");
  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  const [loading, setLoading] = useState<boolean>(true);

  const [breadCrumbsLoading, setBreadCrumbsLoading] = useState<boolean>(false);
  const [breadcrumbs, setBreadcrumbs] = useState<any>([
    <NavLink to="/">Home</NavLink>,
  ]);

  // User Login, logout and reset password dialogs visiblity handling states
  const [activeLoginDialog, setActiveLoginDialog] = useState<boolean>(false);
  const [activeSignupDialog, setActiveSignupDialog] = useState<boolean>(false);
  const [activeResetDialog, setActiveResetDialog] = useState<boolean>(false);
  const [
    activeEmailSentCongratulationPopup,
    setActiveEmailSentCongratulationPopup,
  ] = useState(false);
  const [emailForRecoveryPassoword, setEmailForRecoveryPassoword] =
    useState<string>("");

  // Loged in user details handling state
  const [userDetails, setUserDetails] = useState("");

  // All/Active navigation handling states
  const [navigations, setNavigations] = useState<any>([]);
  const [activeNavigation, setActiveNavigation] = useState<any>(() => {
    try {
      const storedValue = window.localStorage.getItem("ACTIVE_NAVIGATION");
      return storedValue ? JSON.parse(storedValue) : navigations;
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return navigations;
    }
  });

  // Component Search handling state
  const [searchProductBy, setSearchProductBy] = useState<string>("");
  const handleBreadCrumbsLoading: any = (loading: boolean) => {
    setBreadCrumbsLoading(loading);
  };

  const globalContextProps = {
    setActiveNavigation,
    activeNavigation,
    navigations,
    setNavigations,
    breadCrumbsLoading,
    setBreadCrumbsLoading,
    breadcrumbs,
    setBreadcrumbs,
    handleBreadCrumbsLoading,
    userDetails,
    setUserDetails,
    searchProductBy,
    setSearchProductBy,
    activeLoginDialog,
    setActiveLoginDialog,
    activeSignupDialog,
    setActiveSignupDialog,
    activeResetDialog,
    setActiveResetDialog,
    activeEmailSentCongratulationPopup,
    setActiveEmailSentCongratulationPopup,
    setEmailForRecoveryPassoword,
    emailForRecoveryPassoword,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value={globalContextProps}>
        <CssBaseline />
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
