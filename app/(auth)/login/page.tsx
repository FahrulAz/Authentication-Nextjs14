import FormLogin from "@/components/auth/form-login";
import { GithubBtn, GoogleBtn } from "@/components/auth/social-btn";

const Login = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">
        Sign In to Your Account
      </h1>
      <FormLogin />
      <div className="my-4 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
        <p className="capitalize mx-4 mb-0 text-center font-semibold text-gray-600">
          or
        </p>
      </div>
      <GoogleBtn />
      <GithubBtn />
    </div>
  );
};

export default Login;
