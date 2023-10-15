import {
  singInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGNIN</h1>
      <button onClick={logGoogleUser}>Sign in google popup</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
