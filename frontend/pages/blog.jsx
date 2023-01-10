import React from 'react'
import { getSession } from 'next-auth/react';

function blog() {
  return (
    <div>blog</div>
  )
}

export default blog
// export const getServerSideProps = async (context) => {
//     const session = await getSession(context);
//     // Check if session exists or not, if not, redirect
//     console.log(session,"session");
//     if (session == null) {
//       return {
//         redirect: {
//           destination: '/auth/not-authenticated',
//           permanent: true,
//         },
//       };
//     }
//     return {
//       props: {},
//     };
//   };