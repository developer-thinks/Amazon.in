import Head from "next/head";
import Header from './../components/Header';
import Banner from './../components/Banner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon by sammed.sankonatti </title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />

        {/* product feeds */}

      </main>
     
    </div>
  );
}
