import "../styles/form.css";

function FormSection() {
  return (
    <div className="form-container">
      <h1>We would love to hear about your project. Let&apos;s talk.</h1>
      <form>
        <input type="text" placeholder="First and last name*" />
        <input type="email" placeholder="Email*" />
        <input type="text" placeholder="Company name*" />
        <input type="text" placeholder="Phone*" />
        <input type="text" placeholder="Please describe your project*" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormSection;
