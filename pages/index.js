import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import Cards from "../Components/Cards";
import Team from "../Components/Team";
import Form from "../Components/form";
import NewsLetter from "../Components/NewsLetter";


export default function Home() {
  return (
    <div>
      <Head>
        <title>FitPlus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
      </Head>
       
      <Header />
      <div>
        
        <Banner />
        {/* <Bannner /> */}
        <Features/>
        <Cards/>
        <Team />
        <NewsLetter/>
        {/* <SignIn /> */}
        <Form />
        <Footer />
      </div>
    </div>
  );
}
