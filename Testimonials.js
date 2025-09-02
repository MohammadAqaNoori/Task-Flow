function Testimonial({ quote, author }) {
  return (
    <div className="bg-dark-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
      <p className="text-secondary-500 font-sans italic mb-4">"{quote}"</p>
      <p className="font-heading font-semibold text-secondary-50">{author}</p>
      <div className="flex justify-center mt-2 text-primary-50">★★★★★</div>
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-dark-500">
      <h2 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary-50">What Users Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial
          quote="This app transformed my workload with its intuitive design!"
          author="Aisha K., Project Manager"
        />
        <Testimonial
          quote="Revolutionized our team’s productivity with real-time tools."
          author="Rahul S., Team Lead"
        />
        <Testimonial
          quote="Made organizing my life so much easier and efficient."
          author="Sophie L., Freelancer"
        />
      </div>
    </section>
  );
}

export default Testimonials;