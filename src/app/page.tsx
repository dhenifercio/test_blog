import HomeBody from "./home.tsx/body";
import HomeFooter from "./home.tsx/footer";
import HomeNavbar from "./home.tsx/navbar";

export default function Home() {
  return (
    <main >
     <HomeNavbar />
     <HomeBody/>
     <HomeFooter/>
     
    </main>
  );
}
