/* The Feedback Dashboard"
Scenario: You are building a simple dashboard where users can view a list of employees and write a performance review for them.
 */
import { useState } from "react";
import PropTypes from "prop-types";

const employees = [
  { id: 1, name: "Alice Johnson", role: "Frontend Dev" },
  { id: 2, name: "Bob Smith", role: "Backend Dev" },
  { id: 3, name: "Charlie Brown", role: "Designer" },
];

function StarRating({ maxRating = 5, onSetRating }) {
  const [rating, setRating] = useState(0);

  function handleRate(rate) {
    setRating(rate);
    onSetRating(rate);
  }

  return (
    <div style={{ display: "flex", gap: "4px", cursor: "pointer" }}>
      {Array.from({ length: maxRating }, (_, i) => (
        <span
          key={i}
          onClick={() => handleRate(i + 1)}
          style={{
            fontSize: "24px",
            color: i < rating ? "#fcc419" : "#dcdcdc",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

StarRating.propTypes = {
  maxRating: PropTypes.number,
  onSetRating: PropTypes.func.isRequired,
};

function Box({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}

function ReviewForm({ employee }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted for ${employee.name}: ${rating} Stars - "${comment}"`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Review for {employee.name}</h3>
      <p>{employee.role}</p>

      <div style={{ marginBottom: "10px" }}>
        <StarRating maxRating={5} onSetRating={setRating} />
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a review..."
        rows="4"
        style={{ width: "100%", padding: "8px" }}
      />
      <button style={{ marginTop: "10px", padding: "8px 16px" }}>Submit</button>
    </form>
  );
}

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedEmployee = employees.find((e) => e.id === selectedId);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "40px",
        justifyContent: "center",
      }}
    >
      <Box>
        <h2 style={{ marginTop: 0 }}>Team</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {employees.map((e) => (
            <li
              key={e.id}
              onClick={() => setSelectedId(e.id)}
              style={{
                padding: "10px",
                cursor: "pointer",
                background: e.id === selectedId ? "#e0e7ff" : "transparent",
                borderRadius: "6px",
              }}
            >
              {e.name}
            </li>
          ))}
        </ul>
      </Box>

      <Box>
        {selectedEmployee ? (
          <ReviewForm key={selectedEmployee.id} employee={selectedEmployee} />
        ) : (
          <p>Select an employee to review</p>
        )}
      </Box>
    </div>
  );
}
