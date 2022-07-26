import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Logo from "../assets/gotrik.png";
import "./Receipt.css";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Receipt = ({ orderId, nama, berat, diskon, totalBiaya, status }) => {
  return (
    <>
      <img src={Logo} width="150px" />
      <p>Negla Kencana Residence Blok C No 3</p>
      <p>Ujung Berung, Bandung</p>
      <p>WA : 0821-2775-3082</p>
      <p>-----------------------------</p>
      <p> </p>
      <div className="border">
        <p className="large">{orderId}</p>
      </div>
      <p> </p>
      <p>-----------------------------</p>
      <div className="center">
        <p>{nama}</p>
        <p>Berat : {berat} kg</p>
        <p>Diskon : Rp.{diskon}</p>
        <p>Total : Rp.{totalBiaya}</p>
      </div>
      <p>-----------------------------</p>
      <p>Terima kasih. Semoga berkah.</p>
      <p>goTrik Setrika Kiloan</p>
    </>
  );
};
export default Receipt;
