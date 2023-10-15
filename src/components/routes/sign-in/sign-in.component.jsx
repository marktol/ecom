import {
  singInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SIGNIN</h1>
      <button onClick={logGoogleUser}>Login</button>
    </div>
  );
};
export default SignIn;
