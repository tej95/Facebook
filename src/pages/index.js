import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import Header from '../../components/Header'
import { getSession } from 'next-auth/react';
import LogIn from '../../components/LogIn';







export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     
      <Header></Header>
      <main>
        {/* Sidebar
        Feed
        Widgets */}
      </main>
    </>
  )
}


