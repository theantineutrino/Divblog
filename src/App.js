import Blog from "./Blog";
import NavBar from "./NavBar";
import Intro1 from "./Intro1";
import Footer from "./Footer";
function App() {
  const myStyle = {
    backgroundImage: `url(
      'https://th.bing.com/th/id/OIP.jtzLV8nbTiaPVkbonKgPJAHaDk?pid=ImgDet&rs=1'
    )`,
  };
  return (
    <div>
      <div id="Aboutme">
        <Intro1 />
      </div>
      <NavBar />
      {/* <div style={myStyle}>
        HELLO
      </div> */}
      <div id="Blog">
        <Blog
          title="Blog 1"
          cont="This is a random text to check functionality"
        />
        <Blog
          title="Blog 1"
          cont="This is a random text to check functionality"
        />
        <Blog
          title="Blog 1"
          cont="This is a random text to check functionality"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
