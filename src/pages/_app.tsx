import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import '../styles/stars.scss';
import '../styles/snow.scss';


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
