import { Login } from "../../components/Login";
import { getProviders} from "next-auth/react";


const SignIn = ({providers}) => {
  return <Login providers={providers}/>;
};


export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default SignIn;
