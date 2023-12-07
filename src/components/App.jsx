import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CarsCataloguePage = lazy(() =>
  import('../pages/CarsCataloguePage/CarsCataloguePage')
);
const CarsFavoriteCataloguePage = lazy(() =>
  import('../pages/CarsFavoriteCataloguePage/CarsFavoriteCataloguePage')
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/catalog" element={<CarsCataloguePage />} />
          <Route
            path="/favorites"
            element={<CarsFavoriteCataloguePage />}
          ></Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
