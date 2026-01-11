# Let’s Shyp – Frontend Booking Flow

Intern Assignment Submission

Project Overview

This project implements a desktop-first, end-to-end booking flow for a hyperlocal package delivery service similar to Let’s Shyp. The flow covers the complete journey from pickup/drop entry to booking confirmation, focusing on clarity, validations, UI states, and realistic logistics scenarios. No backend is used; all logic is handled locally with mocked data.

Service Chosen

Package Delivery

Booking Flow Screens

Pickup & Drop Details

Pickup and drop address inputs

Optional delivery notes

Validations for empty fields

Disabled “Next” button until valid

Unserviceable area handling (if address contains “remote”)

Package Details

Package size selection

Weight input (max 20kg)

Express delivery option

Live validation for overweight packages

Pricing & Order Summary

Fare breakdown (base, weight charge, express charge – mocked)

Summary of all details

Ability to edit package and recalculate price

Checkout

Name and phone number input

Form validation (10-digit phone)

Loading state on submit

Random error simulation before confirmation

Booking Confirmation

Success message

Auto-generated booking ID (e.g., LS-482931)

Option to start a new booking

Edge Cases Implemented (Mandatory)

Unserviceable area handling

Price change after editing package details

Express vs Normal delivery pricing

Error and retry state before final confirmation

Tech Stack

React (Create React App)

React Router

Plain CSS for styling

No backend – all data is mocked

Setup Instructions

Clone the repository:

git clone <your-repo-link>
cd letsshyp-booking


Install dependencies:

npm install


Run the project:

npm start


Open in browser:

http://localhost:3000

Assumptions

Users want to complete booking in under 2 minutes

Most packages are under 20kg

Pricing is based only on weight and express option (distance is mocked)

Addresses are validated using simple string logic (no maps)

Users are booking from desktop primarily

Edge Case Logic

If pickup address contains “remote” → service unavailable

If weight > 20kg → error, cannot proceed

If user edits package after pricing → price recalculates

On checkout → 30% chance of simulated error before success

Limitations

No real maps or address suggestions

No backend or database

No real payment gateway

Distance-based pricing is mocked

No authentication or login

Future Improvements

Saved addresses and repeat booking

Map-based address selection

Real distance-based pricing

Live tracking after booking

Mobile-optimized layout

Summary

This project demonstrates how a real-world hyperlocal delivery booking flow can be built with clear UX, strong validations, and realistic edge cases using only frontend logic. The focus is on usability, clarity, and production-feasible UI states rather than visual flashiness.