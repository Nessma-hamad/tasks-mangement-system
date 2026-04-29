import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




 function Home() {
  return (
    <div  >
      <main  >
        <Header text='this my first  app'/>
       <p> Home </p>
      <Footer />
      </main>
    </div>
  );
}

export default Home;
