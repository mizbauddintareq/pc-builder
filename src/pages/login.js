import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3000/",
          })
        }
      >
        Login with github
      </button>
    </div>
  );
};

export default LoginPage;
