import { signOut, useSession } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Filter from '../components/Phone/Filter';
import HeroBanner from '../components/Home/HeroBanner';
import Products from '../components/Product/Products';
import Slider from '../components/Slider';
import SubHeroBanner from '../components/SubHeroBanner.jsx'
import styles from '../styles/Home.module.css';
import Layout from '../Layout';

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session == null) return;
    console.log('session.jwt', session.jwt);
  }, [session]);

  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Strapi - Next - NextAuth</title>
    //   </Head>
    //   <h1 className='text-red-900'>{session ? 'Authenticated' : 'Not Authenticated'}</h1>
    //   {session && (
    //     <div style={{ marginBottom: 10 }}>
    //       <h3>Session Data</h3>
    //       <div>Email: {session.user.email}</div>
    //       <div>JWT from Strapi: Check console</div>
    //     </div>
    //   )}
    //   {session ? (
    //     <button onClick={signOut}>Sign out</button>
    //   ) : (
    //     <Link href="/auth/sign-in">
    //       <button>Sign In</button>
    //     </Link>
    //   )}
    //   <Link href="/protected">
    //     <button
    //       style={{
    //         marginTop: 10,
    //       }}
    //     >
    //       Protected Page
    //     </button>
    //   </Link>
    // </div>
    <>
    <Layout>
    {/* <Slider/> */}
    <HeroBanner/>
    <SubHeroBanner/>
    <Filter/>
    <Products/>
    </Layout>
    </>
  );
}

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);
//   // Check if session exists or not, if not, redirect
//   if (session == null) {
//     return {
//       redirect: {
//         destination: '/auth/not-authenticated',
//         permanent: true,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };