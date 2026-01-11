import { useNavigate } from "react-router-dom";
import { calculatePrice } from "../data/pricing";
import { useEffect } from "react";

export default function Pricing({ formData, setFormData }) {
  const navigate = useNavigate();

  useEffect(() => {
    const newPrice = calculatePrice(Number(formData.weight), formData.express);
    setFormData({ ...formData, price: newPrice });
  }, []);

  return (
    <div className="card">
      <h2>Pricing</h2>

      <p>Base: ₹50</p>
      <p>Weight Charge: ₹{formData.weight * 5}</p>
      <p>Express: ₹{formData.express ? 40 : 0}</p>
      <h3>Total: ₹{formData.price}</h3>

      <p>Pickup: {formData.pickup}</p>
      <p>Drop: {formData.drop}</p>
      <p>Package: {formData.size}, {formData.weight}kg</p>

    <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
        <button style={{ background: "#e5e7eb", color: "#111827" }}
        onClick={() => navigate("/package")}>
            Edit Package
        </button>
        <button onClick={() => navigate("/checkout")}>
            Proceed
        </button>
    </div>
    <p className="success">Price updated based on your details</p>
    </div>


  );
}
