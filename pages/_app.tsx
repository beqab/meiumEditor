import "../styles/globals.scss";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore as any);
export default wrapper.withRedux(MyApp);
