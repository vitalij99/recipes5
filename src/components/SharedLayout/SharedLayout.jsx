import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { ToTop } from 'components/ToTop/ToTop';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
        <ToTop />
      </main>
      <Footer />
    </>
  );
};
