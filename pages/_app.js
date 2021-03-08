import { Provider } from "react-redux";
import { init } from "@rematch/core";

import Layout from "../components/Layout";
import * as models from "../models";
import "../styles/global.scss";

const store = init({
  models,
  redux: {
    devtoolOptions: {
      disabled: false,
    }
  },
});


const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <div className="content m-4">
        <Component {...pageProps} />
      </div>
    </Layout>
  </Provider>
);

export default App;
