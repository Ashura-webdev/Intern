import { useNavigate } from "react-router-dom";

export default function PickupDrop({ formData, setFormData }) {
  const navigate = useNavigate();
  const unserviceable = formData.pickup.toLowerCase().includes("remote");

  const canProceed = formData.pickup && formData.drop && !unserviceable;

  return (
    <div className="card">
      <h2>Pickup & Drop</h2>

      <input placeholder="Pickup Address"
        value={formData.pickup}
        onChange={e => setFormData({ ...formData, pickup: e.target.value })}
      />

      <input placeholder="Drop Address"
        value={formData.drop}
        onChange={e => setFormData({ ...formData, drop: e.target.value })}
      />

      <textarea placeholder="Notes (optional)"
        value={formData.notes}
        onChange={e => setFormData({ ...formData, notes: e.target.value })}
      />

      {!formData.pickup && <p className="error">Pickup required</p>}
      {!formData.drop && <p className="error">Drop required</p>}
      {unserviceable && <p className="error">Service not available here</p>}

      <button disabled={!canProceed} onClick={() => navigate("/package")}>
        Next
      </button>
    </div>
  );
}
