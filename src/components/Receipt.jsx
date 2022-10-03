import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Logo from "../assets/gotrik.png";
import "./Receipt.css";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Receipt = ({
  orderId,
  nama,
  tglMasuk,
  tglKeluar,
  layanan,
  berat,
  diskon,
  totalBiaya,
  ongkir,
}) => {
  return (
    <>
      <img src={Logo} width="100px" />
      <p>goTrik Setrika Kiloan</p>
      <p>WA : 0821-1285-6539</p>
      <p>=============================</p>
      <p> </p>
      <div className="border">
        <p className="large">
          {orderId} - {layanan}
        </p>
      </div>
      <p> </p>
      <p>=============================</p>
      <div className="center">
        <p>{nama}</p>
        <p>Masuk : {tglMasuk}</p>
        <p>Selesai : {tglKeluar}</p>
        <p>Berat : {berat} kg</p>
        <p>-----------------------------</p>
        <p>(Ongkos kirim : +Rp.{ongkir})</p>
        <p>(Diskon : -Rp.{diskon})</p>
        <p>-----------------------------</p>
        <p>TOTAL : Rp.{totalBiaya}</p>
      </div>
      <p> . </p>
      <p>Terima kasih. Semoga berkah.</p>
      <p>--**--</p>
      <p>Jl Bola Basket No 26 (Perluasan)</p>
      <p>Arcamanik, Bandung</p>
    </>
  );
};
export default Receipt;
