import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Logo from "../assets/gotriksvg2.svg";
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
      <hr />
      <h1>{orderId}</h1>
      <h2>{nama}</h2>
      <div>Berat : {berat} kg</div>
      <div>Diskon : Rp.{diskon}</div>
      <div>Total : Rp.{totalBiaya}</div>
      <hr />
      <p>Terima kasih telah menggunakan jasa goTrik setrika kiloan!</p>
    </>
  );
};
export default Receipt;
