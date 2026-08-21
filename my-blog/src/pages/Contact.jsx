import Navbar from "../components/Navbar";

export default function Contact() {
  // const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3f1cfd86-da18-4b9f-8140-19a9aef89e79");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      alert("Thank you for your message!")
    } else {
      console.log("Error", data);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="contact-page-text">
        <div className="contact-page-title">Contact Me</div>
        <form className="contact-form" onSubmit={onSubmit}>
          <label className="form-label">
            Name:
            <input
              className="input-name"
              type="text"
              name="name"
              required
            />
          </label>
          <label className="form-label">
            Email:
            <input
              className="input-email"
              type="email"
              name="email"
              required
            />
          </label>
          <label className="form-label">
            Message:
            <br />
            <textarea
              className="input-message"
              name="message"
              required
            />
          </label>

          <button className="send-button" type="submit">Send</button>
        </form>
        </div>
      </div>
    </>
  );
}
