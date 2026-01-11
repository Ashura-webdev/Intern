import { useNavigate } from "react-router-dom";

export default function PackageDetails({ formData, setFormData }) {
  const navigate = useNavigate();
  const overweight = Number(formData.weight) > 20;

  return (
    <div className="card">
      <h2>Package Details</h2>

      <select
        value={formData.size}
        onChange={e => setFormData({ ...formData, size: e.target.value })}
      >
        <option value="">Select Size</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={formData.weight}
        onChange={e => setFormData({ ...formData, weight: e.target.value })}
      />

      {overweight && <p className="error">Max weight is 20kg</p>}

      <div className="checkbox-row">
        <input
          type="checkbox"
          checked={formData.express}
          onChange={e => setFormData({ ...formData, express: e.target.checked })}
        />
        <span>Express Delivery</span>
      </div>

      <button
        disabled={!formData.size || !formData.weight || overweight}
        onClick={() => navigate("/pricing")}
      >
        View Price
      </button>
    </div>
  );
}
