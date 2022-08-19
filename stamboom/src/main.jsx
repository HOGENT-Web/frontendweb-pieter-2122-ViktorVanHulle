import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./components/i18n/Loading";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </React.StrictMode>
  </Suspense>
);
