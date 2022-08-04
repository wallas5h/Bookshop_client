import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './features/store';
import { Routing } from './Routing';


function App() {

  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <Routing />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </PersistGate>



    </Provider>
  );
}

export default App;
