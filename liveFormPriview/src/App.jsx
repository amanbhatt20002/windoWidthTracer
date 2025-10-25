import { useState } from "react";

function LivePreviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; // Synthetic event object
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <h2>📝 Live Preview Form</h2>

      {/* Form Inputs */}
      <form style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Type your message..."
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
      </form>

      {/* Live Preview Section */}
      <div style={styles.preview}>
        <h3>👀 Live Preview:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "50px auto", fontFamily: "sans-serif" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "8px", fontSize: "16px" },
  textarea: { padding: "8px", fontSize: "16px", height: "80px" },
  preview: { marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" },
};

export default LivePreviewForm;
