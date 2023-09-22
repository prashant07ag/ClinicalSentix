import Head from "next/head";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./dashboard/index";
import styles from '@/styles/Home.module.css'
import Login from "./sections/login";
import { useSession } from "next-auth/react";

// function index() {
//   const [message, setMessage] = useState("Loading");
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/home")
//       .then((response) => response.json())
//       .then((data) => {
//         // message = 'Loading'
//         // once data is retrieved
//         // message = data.message
//         setMessage(data.message);
//         setPeople(data.people);
//       });
//   }, []);

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {
          session && (
            <>
              <Sidebar />
              <Dashboard />
            </>
          )
        }
        <Login />
      </main>
    </>
  );
}
