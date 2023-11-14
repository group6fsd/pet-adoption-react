export default function ContactUs() {
  return (
    <>
      <section className="bg-[#fafcff] pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Us</h2>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label htmlFor="name" className="text-base font-bold">
                  Name
                </label>
                <input type="text" name="name" id="name" className="w-full bg-slate-200 p-3 rounded-md focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="email" className="text-base font-bold">
                  Email
                </label>
                <input type="email" name="email" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="message" className="text-base font-bold">
                  Message
                </label>
                <textarea name="message" id="message" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500 h-32"></textarea>
              </div>
              <div className="w-full">
                <button className="w-full bg-orange-500 text-white py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
