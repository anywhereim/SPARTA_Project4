import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LetterProvider from "./contextLetter/LetterContext";
import UserInfoProvider from "./contextLogin/UserInfoContext";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserInfoProvider>
    <LetterProvider>
      <App />
    </LetterProvider>
  </UserInfoProvider>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
