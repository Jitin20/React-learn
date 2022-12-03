import { createStore } from 'redux';
import reducers from './Reducers';
const store = createStore(reducers, {},   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// export default () => {
//     const store = createStore(
//       reducers,{});
//     return store;
//   };
