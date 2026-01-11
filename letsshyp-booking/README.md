# Let’s Shyp – Frontend Booking Flow

**Intern Assignment Submission**

---

## Project Overview

This project implements a desktop-first, end-to-end booking flow for a hyperlocal package delivery service similar to Let’s Shyp.
It covers the complete journey from pickup/drop entry to booking confirmation, focusing on clarity, validations, UI states, and realistic logistics scenarios.
No backend is used — all logic is handled locally with mocked data.

---

## Service Chosen

**Package Delivery**

---

## Booking Flow Screens

### 1. Pickup & Drop Details

* Pickup and drop address inputs
* Optional delivery notes
* Validation for empty fields
* “Next” button disabled until valid
* Unserviceable area handling (if address contains “remote”)

### 2. Package Details

* Package size selection
* Weight input (max 20kg)
* Express delivery option
* Live validation for overweight packages

### 3. Pricing & Order Summary

* Fare breakdown (base, weight charge, express charge – mocked)
* Summary of all details
* Edit option that recalculates price

### 4. Checkout

* Name and phone number input
* Form validation (10-digit phone)
* Loading state on submit
* Random error simulation before success

### 5. Booking Confirmation

* Success message
* Auto-generated booking ID (e.g., LS-482931)
* Option to start a new booking

---

## Mandatory Edge Cases Implemented

* Unserviceable area handling
* Price change after editing package details
* Express vs Normal delivery pricing
* Error and retry state before final confirmation

---

## Tech Stack

* React (Create React App)
* React Router
* Plain CSS
* Mocked frontend-only logic

---

## Setup Instructions

```bash
git clone <your-repo-link>
cd letsshyp-booking
npm install
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## Assumptions

* Users want to finish booking in under 2 minutes
* Most packages are under 20kg
* Pricing depends on weight and express option (distance mocked)
* Address validation is basic string logic
* Desktop-first usage

---

## Edge Case Logic

* Pickup contains “remote” → service unavailable
* Weight > 20kg → cannot proceed
* Editing package → price recalculates
* Checkout → 30% chance of simulated error

---

## Limitations

* No maps or address suggestions
* No backend or database
* No real payments
* No authentication
* Distance-based pricing is mocked

---

## Future Improvements

* Saved addresses
* Repeat booking
* Map-based address input
* Live tracking
* Mobile optimization

---

## Summary

This project demonstrates a realistic hyperlocal delivery booking flow with strong UX focus, validations, and edge-case handling using only frontend logic.
The goal is clarity, usability, and production-feasible UI behavior rather than visual flashiness.
