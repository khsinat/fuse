import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("subject").value;

  // Construct mailto link
  const mailtoLink = `mailto:recipient@example.com?subject=Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  // Open mailto link
  window.location.href = mailtoLink;
}

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className=" section flex items-center justify-center" >
          {/* <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            > */}
          {/* <div className="mb-3">
                <input
                  id="name"
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div> */}
          {/* <div className="mb-3">
                <input
                  id="email"
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div> */}
          {/* <div className="mb-3">
                <input
                  id="subject"
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div> */}
          {/* <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div> */}
          {/* <button type="submit" className="btn btn-primary" >
                Send Now
              </button> */}
          {/* </form> */}
          {/* </div> */}
          <div className="content flex flex-col items-center col-12 md:col-6 lg:col-5 ">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
