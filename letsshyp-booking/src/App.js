import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PickupDrop from "./pages/PickupDrop";
import PackageDetails from "./pages/PackageDetails";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function App() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    notes: "",
    size: "",
    weight: "",
    express: false,
    price: 0,
    name: "",
    phone: ""
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PickupDrop formData={formData} setFormData={setFormData} />} />
        <Route path="/package" element={<PackageDetails formData={formData} setFormData={setFormData} />} />
        <Route path="/pricing" element={<Pricing formData={formData} setFormData={setFormData} />} />
        <Route path="/checkout" element={<Checkout formData={formData} setFormData={setFormData} />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
