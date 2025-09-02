function Feature({ icon, title, description }) {
  return (
    <div className="bg-dark-50 p-6 rounded-lg shadow-[0_10px_30px_rgba(0,255,200,0.15)] text-center transition-transform duration-300 hover:-translate-y-2">
      <div className="text-4xl mb-4 text-primary-50">{icon}</div>
      <h3 className="text-xl font-heading font-semibold mb-2 text-secondary-50">{title}</h3>
      <p className="text-secondary-500 font-sans">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-16 bg-dark-500">
      <h2 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary-50">Key Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature
          icon="📋"
          title="Task Management"
          description="Create and track tasks with ease, set reminders, and prioritize your work effectively."
        />
        <Feature
          icon="🔄"
          title="Sync Across Devices"
          description="Access your tasks anytime with seamless syncing across phones, tablets, and desktops."
        />
        <Feature
          icon="🤝"
          title="Team Collaboration"
          description="Collaborate in real-time, assign tasks, and stay updated with your team effortlessly."
        />
      </div>
    </section>
  );
}

export default Features;