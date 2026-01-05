import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>

      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Send Reset Link</button>
      </form>

      <p>
        <Link to="/">Back to Login</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
