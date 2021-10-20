import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // google sign in

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChane = (e) => {
    setName(e.target.value);
  };
  // register user with email and password

  const handleRegistration = (e) => {
    setUser(e.preventDefault());
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
    setUser(e.target.reset());
  };

  // log in email and password
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name });
  };

  const signInWithEmail = (e) => {
    setUser(e.preventDefault());
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // setUser(resutl.user);
        setUser(result.user);
        setUserName();
        console.log(result.user);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const handleLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    handleRegistration,
    handelEmailChange,
    handlePasswordChange,
    handleLogOut,
    signInWithGoogle,
    signInWithEmail,
    handleNameChane,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;