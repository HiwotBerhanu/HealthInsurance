const plans = [
  {
    title: "Basic Plan",
    description: "Essential coverage for individuals.",
    price: "$100/month",
  },
  {
    title: "Standard Plan",
    description: "Includes additional benefits.",
    price: "$150/month",
  },
  {
    title: "Premium Plan",
    description: "Comprehensive coverage for families.",
    price: "$200/month",
  },
  {
    title: "Standard Plan",
    description: "Includes additional benefits.",
    price: "$150/month",
  },
  {
    title: "Premium Plan",
    description: "Comprehensive coverage for families.",
    price: "$200/month",
  },
  {
    title: "Basic Plan",
    description: "Essential coverage for individuals.",
    price: "$100/month",
  },
];

export default function Plans() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#90E4C1]">
        Health Insurance Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-[#2D3748] mb-2">
              {plan.title}
            </h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="font-bold text-lg text-[#90E4C1]">{plan.price}</p>
            <button className="mt-4 bg-[#90E4C1] text-white font-semibold py-2 px-4 rounded-2xl shadow-md transition-transform transform hover:scale-105">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
