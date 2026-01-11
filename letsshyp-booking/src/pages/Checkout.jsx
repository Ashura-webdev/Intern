import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout({ formData, setFormData }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const valid = formData.name && formData.phone.length === 10;

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      if (Math.random() < 0.3) {
        setError("Something went wrong. Try again.");
        setLoading(false);
      } else {
        navigate("/success");
      }
    }, 1500);
  };

  return (
    <div className="card">
      <h2>Checkout</h2>

      <input placeholder="Name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />

      <input placeholder="Phone"
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
      />

      {!valid && <p className="error">Enter valid name and 10-digit phone</p>}
      {error && <p className="error">{error}</p>}

      <button disabled={!valid || loading} onClick={submit}>
        {loading ? "Placing..." : "Confirm Booking"}
      </button>
    </div>
  );
}
