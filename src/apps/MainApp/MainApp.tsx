import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage} from 'src/pages';
import { store } from 'src/redux/store';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'react-bootstrap';
import './MainApp.scss';


export const MainApp = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <ContactListPage  />
            } />
            <Route path="contact">
              <Route index element={
                <ContactListPage />
              } />
              <Route path=":contactId" element={
                <ContactPage />
              } /> 
            </Route>
            <Route path="groups">
              <Route index element={
                <GroupListPage />
              } />
              <Route path=":groupId" element={
                <GroupPage />
              } />
            </Route>
            <Route path="favorit" element={
              <FavoritListPage  />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
