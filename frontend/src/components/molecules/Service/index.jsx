export default function Service() {
  return (
    <>
      <section className="bg-[#fafcff] pt-12 pb-32">
        <div className="container">
          <div className="w-full px-4 text-center mb-10">
            <h4 className="font-[Poppins] font-bold text-3xl mb-10 sm:text-4xl lg:text-5xl">Our Services</h4>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                <svg width="100" height="100" className="w-full mt-10" viewBox="0 0 63 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="Vector"
                    d="M31.3231 22.3222C21.6812 22.244 7.89615 36.2435 7.82388 45.1505C7.79133 49.162 11.0271 51.585 16.4825 51.6293C22.4126 51.6774 26.3517 48.8264 31.1077 48.865C35.905 48.9039 39.8083 51.8186 45.6862 51.8663C51.1416 51.9105 54.4163 49.5404 54.4488 45.5288C54.5211 36.6219 40.965 22.4004 31.3231 22.3222ZM13.4523 20.7277C12.2218 16.7346 8.35249 14.1237 4.81027 14.895C1.26805 15.6664 -0.605332 19.5285 0.62511 23.5215C1.85555 27.5146 5.72489 30.1255 9.26711 29.3541C12.8093 28.5828 14.6827 24.7207 13.4523 20.7277ZM23.7583 18.4226C27.5226 17.5175 29.4411 12.7281 28.044 7.72554C26.6469 2.72302 22.4628 -0.597385 18.6985 0.307774C14.9342 1.21293 13.0156 6.00233 14.4127 11.0048C15.8098 16.0074 19.9952 19.3289 23.7583 18.4226ZM57.9518 15.3274C54.4225 14.4987 50.5125 17.0465 49.2162 21.019C47.9212 24.9916 49.7316 28.8836 53.2609 29.7123C56.7901 30.541 60.7001 27.9932 61.9964 24.0206C63.2915 20.0481 61.481 16.1561 57.9518 15.3274ZM38.9502 18.5459C42.6993 19.512 46.9368 16.2599 48.4149 11.2807C49.893 6.30156 48.0524 1.48281 44.3033 0.515536C40.5542 -0.451737 36.3167 2.80148 34.8386 7.78067C33.3605 12.7599 35.2011 17.5798 38.9502 18.5459Z"
                    fill="black"
                  />
                </svg>
                <div className="px-6 py-8">
                  <h3>
                    <a href="#" className="block mb-3 font-semibold text-xl text-center hover:text-orange-500">
                      Adopt A pet
                    </a>
                  </h3>
                  <p className="font-medium text-base mb-6 text-center">We provide an adoption pet system that you can find it here</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
                <svg width="100" height="100" className="w-full mt-10" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.7917 38.125H22.8751C22.8751 40.87 26.3572 43.2083 30.5001 43.2083C34.643 43.2083 38.1251 40.87 38.1251 38.125C38.1251 35.3292 35.4817 34.3125 29.8901 32.9654C24.5017 31.6183 17.7917 29.9408 17.7917 22.875C17.7917 18.3254 21.528 14.4621 26.6876 13.1658V7.625H34.3126V13.1658C39.4722 14.4621 43.2084 18.3254 43.2084 22.875H38.1251C38.1251 20.13 34.643 17.7917 30.5001 17.7917C26.3572 17.7917 22.8751 20.13 22.8751 22.875C22.8751 25.6708 25.5184 26.6875 31.1101 28.0346C36.4984 29.3817 43.2084 31.0592 43.2084 38.125C43.2084 42.6746 39.4722 46.5379 34.3126 47.8342V53.375H26.6876V47.8342C21.528 46.5379 17.7917 42.6746 17.7917 38.125Z"
                    fill="black"
                  />
                </svg>
                <div className="px-6 py-8">
                  <h3>
                    <a href="#" className="block mb-3 font-semibold text-xl text-center hover:text-orange-500">
                      Donation
                    </a>
                  </h3>
                  <p className="font-medium text-base mb-6 text-center">Donation system that you can donate pets with money or foods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
