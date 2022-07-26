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
      <img src={Logo} width="200px" />
      <p>Negla Kencana Residence</p>
      <p>----------------------------</p>
      <p className="large">{orderId}</p>
      <p>----------------------------</p>
      <p>{nama}</p>
      <p>Berat : {berat} kg</p>
      <p>Diskon : Rp.{diskon}</p>
      <p>Total : Rp.{totalBiaya}</p>
      <p>----------------------------</p>
      <p>Terima kasih telah menggunakan jasa goTrik setrika kiloan!</p>
    </>
  );
};
export default Receipt;
