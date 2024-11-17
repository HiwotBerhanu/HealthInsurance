export default function Benefits() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#90E4C1] to-[#6DD3C1]">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Plan Benefits
      </h1>
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto">
        <ul className="list-disc list-inside space-y-6">
          <li className="flex items-center transition-transform transform hover:scale-105">
            <i className="fas fa-check-circle text-[#90E4C1] mr-4 text-2xl"></i>
            <span className="text-lg font-medium text-[#2D3748]">
              Hospital coverage
            </span>
          </li>
          <li className="flex items-center transition-transform transform hover:scale-105">
            <i className="fas fa-check-circle text-[#90E4C1] mr-4 text-2xl"></i>
            <span className="text-lg font-medium text-[#2D3748]">
              Prescription discounts
            </span>
          </li>
          <li className="flex items-center transition-transform transform hover:scale-105">
            <i className="fas fa-check-circle text-[#90E4C1] mr-4 text-2xl"></i>
            <span className="text-lg font-medium text-[#2D3748]">
              Annual health check-ups
            </span>
          </li>
          <li className="flex items-center transition-transform transform hover:scale-105">
            <i className="fas fa-check-circle text-[#90E4C1] mr-4 text-2xl"></i>
            <span className="text-lg font-medium text-[#2D3748]">
              24/7 telemedicine services
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
