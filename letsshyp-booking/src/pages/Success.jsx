export default function Success() {
  const id = "LS-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h2>Booking Confirmed 🎉</h2>
      <p>Your Booking ID</p>
      <h3>{id}</h3>
      <p className="success">Your order has been placed successfully.</p>
      <button onClick={() => window.location.href = "/"}>Book Another</button>
    </div>
  );
}
