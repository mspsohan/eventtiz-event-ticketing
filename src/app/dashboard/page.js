"use client"
import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import AuthNav from "../../components/AuthNav";
import NoEvent from "../../components/NoEvent";
import Events from "../../components/Events";

import { auth } from "../../utils/firebase";
import { getEvents } from "../../utils/util";
import Loading from "../../components/Loading";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
   const router = useRouter();
   const [user, setUser] = useState({});
   const [events, setEvents] = useState([]);
   const [loading, setLoading] = useState(true);

   const isUserLoggedIn = useCallback(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser({ email: user.email, uid: user.uid });
            getEvents(user.uid, setEvents, setLoading);
         } else {
            return router.push("/register");
         }
      });
   }, [router]);

   useEffect(() => {
      isUserLoggedIn();
   }, [isUserLoggedIn]);

   if (loading) return <Loading title='Your dashboard is almost ready.🍚' />;
   return (
      <div>
         <Head>
            <title>Dashboard | EventTiz</title>
            <meta
               name='description'
               content='An event ticketing system built with NextJS and Firebase'
            />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main>
            <AuthNav user={user} />
            {events.length > 0 ? <Events events={events} /> : <NoEvent />}
         </main>
      </div>
   );
};

export default Dashboard;
