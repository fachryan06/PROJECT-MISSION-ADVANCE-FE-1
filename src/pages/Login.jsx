import AuthLayouts from "../layouts/AuthLayouts";
import LoginForm from "../components/organisems/auth/LoginForm";

const Login = () => {
  return (
    <>
      <section className="login-background">
        <AuthLayouts>
          <LoginForm />
        </AuthLayouts>
      </section>
    </>
  );
};

export default Login;
