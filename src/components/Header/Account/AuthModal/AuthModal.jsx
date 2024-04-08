import { useState } from "react";
import "./AuthModal.css";
import { HiX } from "react-icons/hi";
import AuthImage from "../../../../assets/AuthModal/authModal.jpg";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { auth } from "../../../../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";
import { setLogedUser } from "../../../../redux/usersSlice.js";
import { useDispatch } from 'react-redux';

export const AuthModal = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userCredentials, setUserCredentials] = useState({});


  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  }
  function handleSignup(e) {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Registration complited!");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email or password");
        } else if (errorCode === "auth/email-already-in-use") {
          toast.error("You already have account!");
        } else if(errorCode === "auth/weak-password") {
          toast.error("Too short password,type longer one!");
        }
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsOpen(false);
        dispatch(setLogedUser(true));
        toast.success("You logged in!")
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
          toast.error("Wrond email or password")
        }
      });
  }

  function handlePasswordReset() {
    const email = prompt('Please enter your email');
    sendPasswordResetEmail(auth, email);
    toast("Email sent! Check your inbox for password reset instructons.")
  }

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <HiX />
          </button>
          <div className="modalContent">
            <div className="modal__image">
              <img src={AuthImage} alt="authModal" width="100%" />
            </div>
            {showLogin === false ? (
              // Login start
              <div className="modal__wrapper">
                <p>Log In</p>
                <form>
                  <div className="log_wrapper">
                    <label htmlFor="email-address">Email</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      onChange={(e) => {
                        handleCredentials(e);
                      }}
                    />
                  </div>

                  <div className="log_wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      onChange={(e) => {
                        handleCredentials(e);
                      }}
                    />
                    <div className="show-pass-position">
                      <div className="show__password__wrapper">
                        <label htmlFor="check">Show/Hide</label>
                        <input
                          id="check"
                          type="checkbox"
                          value={showPassword}
                          onChange={() => setShowPassword((prev) => !prev)}
                        />
                      </div>
                      <a className="passwordreset__wrapper" href="#" onClick={handlePasswordReset}>
                        Password resset
                      </a>
                    </div>
                  </div>

                  <div className="login_button_wrapper">
                    <button
                    onClick={(e) => handleLogin(e)}
                    >
                      Login
                    </button>
                    <h5>New user?</h5>
                    <a
                      className="signin_wrapper"
                      href="#"
                      onClick={() => setShowLogin(true)}
                    >
                      Sign In
                    </a>
                  </div>
                </form>
                <div className="login_via__services">
                  <div className="login_via__services__text__wrapper">
                    <span></span>
                    <h4>Or Login with</h4>
                    <span></span>
                  </div>
                  <div className="login_via__services__buttons">
                    <button style={{ backgroundColor: "red" }}>
                      <TiSocialGooglePlus />
                      Google
                    </button>
                    <button style={{ backgroundColor: "blue" }}>
                      <TiSocialFacebook />
                      Facebook
                    </button>
                    <button style={{ backgroundColor: "grey" }}>
                      <TiSocialGithub />
                      Github
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Login end
              <div className="modal__wrapper__sign-in">
                <p>Sign In</p>
                <form>
                  <div className="log_wrapper">
                    <label htmlFor="email-address">Email</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      onChange={(e) => {
                        handleCredentials(e);
                      }}
                    />
                  </div>

                  <div className="log_wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      onChange={(e) => {
                        handleCredentials(e);
                      }}
                    />

                    <div className="show__password__wrapper">
                      <label htmlFor="check">Show/Hide</label>
                      <input
                        id="check"
                        type="checkbox"
                        value={showPassword}
                        onChange={() => setShowPassword((prev) => !prev)}
                      />
                    </div>
                  </div>

                  <div className="login_button_wrapper">
                    <button onClick={(e) => handleSignup(e)}>Sign in</button>
                    <h5>Already have account?</h5>
                    <a
                      className="signin_wrapper"
                      href="#"
                      onClick={() => setShowLogin(false)}
                    >
                      Login In
                    </a>
                  </div>
                  <div className="login_via__services">
                    <div className="login_via__services__text__wrapper">
                      <span></span>
                      <h4>Or Login with</h4>
                      <span></span>
                    </div>
                    <div className="login_via__services__buttons">
                      <button style={{ backgroundColor: "red" }}>
                        <TiSocialGooglePlus />
                        Google
                      </button>
                      <button style={{ backgroundColor: "blue" }}>
                        <TiSocialFacebook />
                        Facebook
                      </button>
                      <button style={{ backgroundColor: "grey" }}>
                        <TiSocialGithub />
                        Github
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
