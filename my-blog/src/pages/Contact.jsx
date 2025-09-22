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
      <div className="pageContainer">
        <h1>Contact Me</h1>
        <form className="contactForm" onSubmit={onSubmit}>
          <label>
            Name:
            <input
              className="inputName"
              type="text"
              name="name"
              required
            />
          </label>
          <label>
            Email:
            <input
              className="inputMail"
              type="email"
              name="email"
              required
            />
          </label>
          <label>
            Message:
            <br />
            <textarea
              className="inputMessage"
              name="message"
              required
            />
          </label>

          <button className="sendButton" type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
