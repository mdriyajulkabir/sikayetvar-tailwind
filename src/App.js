import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./FrontEnd/Style/GlobalCss.css"
import Home from './FrontEnd/Home';
import Trend100 from './FrontEnd/Trend100';
import Complaints from './FrontEnd/Complaints';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sikayetler" element={<Complaints />} />
          {/* <Route
            path="/sikayetler/complaint-details"
            element={<ComplaintDetails />}
          /> */}
          {/* <Route
            path="/sikayetler/user-all-complaints"
            element={<UserComplaints />}
          /> */}
          {/* <Route path="/karsilastir" element={<CompareBrands />} /> */}
          {/* <Route path="/product-compare" element={<ProductCompare />} /> */}
          {/* <Route path="/product-solution" element={<ProductSolutionPage />} /> */}
          <Route path="/trend-100" element={<Trend100 />} />
          {/* <Route path="/sikayetyaz" element={<WriteComplement />} /> */}
          {/* <Route path="/kurumsal-uyelik" element={<Kurumsal />} /> */}
          {/* <Route path="/reklam-cozumleri" element={<AdvertisingSolutions />} /> */}
          {/* <Route path="/ace-odulleri" element={<AceRewards />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
