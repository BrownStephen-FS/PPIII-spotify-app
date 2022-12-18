import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";

function App() {
  return (
    <div>
      <Header />
      <main style={styles.container}>
        <Nav />
        <section>
          <Routes>
            <Route>
              <Route exact path="/" element={<Login />} />
            </Route>
            <Route path="/Main" element={<Main />} />
            <Route path="/Albums" element={<Albums />} />
            <Route path="/Artists" element={<Artists />} />
            <Route path="/Songs" element={<Songs />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
};
