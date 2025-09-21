export default function Contact() {
  const contactInfo = {
    message: "If you'd like to discuss in more detail, feel free to reach out to me anytime.",
    email: "lokiloki4693@gmail.com",
    phone: "9361719237",
  };

  return (
    <section
      id="contact"
      className="h-svh flex flex-col justify-center items-center md:flex-row py-20 bg-gray-700 text-white"
    >
      <div className="flex flex-col items-center mt-20 max-w-xl text-center">
        <h1 className="text-3xl font-bold border-b-2 mb-5">Contact</h1>
        <p className="mb-6">{contactInfo.message}</p>
        <p className="mb-6">
          <span className="font-bold text-lg mr-1">Email:</span>
          <a href={`mailto:${contactInfo.email}`} className="underline hover:text-blue-300">
            {contactInfo.email}
          </a>
        </p>
        <p className="mb-6">
          <span className="font-bold text-lg mr-1">Phone:</span>
          <a href={`tel:${contactInfo.phone}`} className="underline hover:text-blue-300">
            {contactInfo.phone}
          </a>
        </p>
      </div>
    </section>
  );
}