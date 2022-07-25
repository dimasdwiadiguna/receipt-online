import React from "react";
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Receipt = ({ orderId, nama, berat, diskon, totalBiaya, status }) => {
  return (
    <>
      <div>Order {orderId}</div>
      <div>Nama : {nama}</div>
      <div>Berat : {berat} kg</div>
      <div>---------------------</div>
      <div>Diskon : Rp.{diskon}</div>
      <div>Total : Rp.{totalBiaya}</div>
      <div>Status : {status}</div>
    </>
  );
};
export default Receipt;
