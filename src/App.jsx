import React, { useState } from "react";
import Receipt from "./components/Receipt";
import { useParams, useLocation } from "react-router-dom";
import "./App.css";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  let query = useQuery();
  return (
    <Receipt
      orderId={query.get("orderId")}
      nama={query.get("nama")}
      berat={query.get("berat")}
      diskon={query.get("diskon")}
      totalBiaya={query.get("totalBiaya")}
      tglMasuk={query.get("tglMasuk")}
      tglKeluar={query.get("tglKeluar")}
      layanan={query.get("layanan")}
      ongkir={query.get("ongkir")}
    />
  );
}

export default App;
