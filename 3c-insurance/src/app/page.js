export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen items-center md:justify-between p-10 bg-gradient-to-br from-[#90E4C1] to-[#6DD3C1]">
        <div className="md:w-2/3 p-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-md transition-transform transform hover:scale-105">
            Affordable Coverage, Unmatched Care.
          </h1>
          <p className="text-lg text-white mb-6 transition-opacity duration-300 hover:opacity-80">
            Discover health insurance plans that meet your needs and budget.
          </p>
          <button className="bg-white text-[#90E4C1] font-semibold py-3 px-6 rounded-3xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-200">
            Get Started
          </button>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/background-image.png"
            alt="Health Coverage"
            className="object-cover h-32 md:h-72 w-auto transition-transform transform hover:scale-110"
          />
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center min-h-screen justify-center p-8 bg-white">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-[#90E4C1] mb-4 transition-transform transform hover:scale-105">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-4 transition-opacity duration-300 hover:opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            gravida libero at libero congue, id dapibus augue efficitur. Nullam
            ut lectus sit amet nulla pellentesque tincidunt. Donec consectetur a
            massa eget venenatis. Vivamus eu laoreet tortor, at ornare sapien.
            Quisque rhoncus, ligula non suscipit facilisis, orci mauris maximus
            nibh, ut aliquam dui velit nec magna. Nulla ut faucibus tortor.
            Donec congue nec velit venenatis luctus. Curabitur mattis tellus
            quam, pharetra convallis tellus dictum at.
          </p>
          <p className="text-gray-700 transition-opacity duration-300 hover:opacity-80">
            Nulla malesuada justo justo, fringilla convallis orci blandit in.
            Pellentesque non libero quis justo tincidunt vulputate sed at velit.
            Curabitur viverra ultricies varius. Aenean finibus auctor urna, sit
            amet bibendum risus dictum a.
          </p>
          <button className="bg-[#90E4C1] text-white font-semibold py-2 px-4 mt-4 rounded-3xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-200">
            Read more
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/company-photo.jpg"
            alt="About Us"
            className="object-cover h-72 w-full rounded-3xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-[#90E4C1] mb-8 transition-transform transform hover:scale-105">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {[
            {
              title: "Affordable Premiums",
              description:
                "We offer competitive prices without compromising on quality.",
              image: "/affordable.jpg", 
            },
            {
              title: "Wide Network",
              description: "Access to a broad network of healthcare providers.",
              image: "/family.jpg", 
            },
            {
              title: "Comprehensive Coverage",
              description: "Tailored plans that meet diverse health needs.",
              image: "/coverage.jpg", 
            },
            // {
            //   title: "Excellent Support",
            //   description:
            //     "Our team is here to assist you every step of the way.",
            //   image: "/why-us.jpg", 
            // },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-[#262c36]">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <button className="bg-[#90E4C1] text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
