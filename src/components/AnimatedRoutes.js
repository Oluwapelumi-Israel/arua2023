import React from "react";
import Home from "../pages/Home";
import Breakoutsession from "../pages/Breakout";
import Livestream from "../pages/Livestream";
import Livepostalcard from './Livepodcast/Livepostalcard';
import Postallogin from './Livepodcast/Postallogin';
import PostalUpload from './Livepodcast/Upload';
import PostalChat from "./Livepodcast/postalchat";
import { Routes, Route,} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/arua2023" element={<Home/>}></Route>
        <Route path="/livestream" element={<Livestream/>}></Route>
        <Route path="/breakoutsession" element={<Breakoutsession/>}></Route>
        <Route path="/livepostalcard" element={<Livepostalcard/>}></Route>
        <Route path="/login" element={<Postallogin/>}></Route>
        <Route path="/posterupload" element={<PostalUpload/>}></Route>
        <Route path="/comment" element={<PostalChat/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
