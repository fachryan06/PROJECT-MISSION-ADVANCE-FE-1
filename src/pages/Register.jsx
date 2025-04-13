import AuthLayouts from "../layouts/AuthLayouts";
import RegisterForm from "../components/organisems/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <section className="register-background">
        <AuthLayouts>
          <RegisterForm />
        </AuthLayouts>
      </section>
    </>
  );
};

export default Register;
