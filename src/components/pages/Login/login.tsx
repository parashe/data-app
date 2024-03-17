import React from "react";
import "./login.css";
import { FacebookIcon, GithubIcon, GoogleIcon } from "../../svg";
export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="container bg-[#5603ad] dark:bg-black">
      <div className="login-page dark:bg-gray-900">
        <div className="login-card">
          <div className="login-header">
            <p className="dark:text-white">Hey Welcome Back</p>
          </div>
          <div className="social-login">
            <button className="google flex justify-center">
              <GoogleIcon color="#34A853" className="h-4 w-4 mt-1" />{" "}
              &nbsp;google
            </button>
            <button className="facebook flex justify-center">
              <FacebookIcon color="blue" className="h-4 w-4 mt-1" />{" "}
              &nbsp;facebook
            </button>

            <button className="github flex justify-center">
              <GithubIcon color="black" className="h-4 w-4 mt-1" /> &nbsp;github
            </button>
          </div>
          <div className="border-content dark:text-white">Or </div>
          <div className="login-form">
            <form>
              {/* Set the value attribute to an empty string */}
              <input
                type="email"
                placeholder="Username"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Set the value attribute to an empty string */}
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>

            <button className="login-btn">login</button>
          </div>
          <div className="no-account">
            <p>
              Don't have an account? <span>Sign up</span>
            </p>
          </div>
        </div>
        <div className="login-content bg-[#6e44ff]  dark:bg-gray-900">
          <h2>Don't forget to invite your team mates!</h2>
          <p>
            Unblock every employee from marketing and sales to HR and Finance to
            spend safer, easier, and more productive within the finance-approved
            process.
          </p>

          <div className="person-images">
            <img
              src="/assets/person1.jpeg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="person-text">
              <p>"I have a lot of money to spend on myself"</p>
              <h3>Damilola Akin</h3>
              <h4>Developer</h4>
            </div>
          </div>
          <div className="person-images2">
            <img
              src="/assets/person3.jpeg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="person-text">
              <p>"I want to explore the possibilities of finance"</p>
              <h3>Barsha Khakda</h3>
              <h4>Designer</h4>
            </div>
          </div>
          <div className="person-images3">
            <img
              src="/assets/person2.jpeg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="person-text">
              <p>"I can pay everything that is needed for my expenses"</p>
              <h3>Parash Giri</h3>
              <h4>Software Engineer</h4>
            </div>
          </div>

          <div className="learn-btn-content">
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
