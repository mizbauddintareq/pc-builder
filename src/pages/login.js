import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const { callbackUrl } = router.query;
  return (
    <div>
      <button
        className="btn"
        onClick={() =>
          signIn("github", {
            callbackUrl:
              callbackUrl || "https://pc-builder-frontend-tau.vercel.app/",
          })
        }
      >
        Login with github
      </button>
    </div>
  );
};

export default LoginPage;
