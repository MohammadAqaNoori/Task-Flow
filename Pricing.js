import { useState } from 'react';

function PricingCard({ plan, price, features }) {
  return (
    <div className="bg-dark-50 p-6 rounded-lg shadow-[0_10px_30px_rgba(0,255,200,0.15)] text-center transition-transform duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-heading font-semibold mb-4 text-secondary-50">{plan}</h3>
      <p className="text-3xl font-heading font-semibold mb-4 text-primary-50">{price}</p>
      <ul className="text-secondary-500 font-sans mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <button className="bg-gradient-to-r from-primary-50 via-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold font-sans hover:from-primary-600 hover:via-primary-500 hover:to-primary-50 transition-all duration-400">
        Get Started
      </button>
    </div>
  );
}

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-16 bg-dark-500">
      <h2 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary-50">Choose Your Plan</h2>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 font-sans ${!isAnnual ? 'bg-primary-50 text-dark-500' : 'bg-dark-50 text-secondary-50'} rounded-l-full transition-colors duration-300`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 font-sans ${isAnnual ? 'bg-primary-50 text-dark-500' : 'bg-dark-50 text-secondary-50'} rounded-r-full transition-colors duration-300`}
          onClick={() => setIsAnnual(true)}
        >
          Annual (Save 20%)
        </button>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          plan="Free"
          price={isAnnual ? "$0/year" : "$0/month"}
          features={["Unlimited tasks", "Basic email support"]}
        />
        <PricingCard
          plan="Pro"
          price={isAnnual ? "$119.99/year" : "$12.99/month"}
          features={["Unlimited tasks", "Priority support", "Device sync"]}
        />
        <PricingCard
          plan="Team"
          price={isAnnual ? "$239.99/year" : "$24.99/month"}
          features={["Unlimited tasks", "Team collaboration", "Analytics"]}
        />
      </div>
    </section>
  );
}

export default Pricing;