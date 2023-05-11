import Hero from "../src/templates/landing_page-service-2/Hero/";
import Features from "../src/templates/landing_page-service-2/Features/";
import Testimonials from "../src/templates/landing_page-service-2/Testimonials/";
import Footer from "../src/flat/Footer/";

const data = {"uvp":"Create a stunning landing page for your startup idea in seconds with the power of AI","copy":{"hero":{"header":"Create a stunning landing page for your startup in seconds","pricing":"$4.99/month","subheader":"Use the power of AI to build your brand. Collect emails and start growing your business. Try it now for free!"},"features":{"title":"Features","description":"LandingAI offers a suite of powerful features to help you build your brand and grow your business. With a range of customization options, you can create a landing page that is unique to your brand and your message. Here are just a few of the features LandingAI offers:","feature_items":[{"title":"AI-powered design","description":"LandingAI uses powerful algorithms to analyze your startup idea and create a stunning landing page that is tailored to your brand and your message."},{"title":"Easy customization","description":"With LandingAI's easy-to-use interface, you can easily customize your landing page to match your brand and your message."},{"title":"Email collection","description":"LandingAI offers seamless integration with popular email marketing services like Mailchimp and Constant Contact, allowing you to collect emails and start growing your business."}]},"testimonials":{"title":"Testimonials","description":"Don't just take our word for it - here's what our customers have to say about LandingAI!","testimonial_items":[{"text":"I was blown away by how easy it was to create a landing page for my startup. The AI design really helped me bring my brand to life.","person":{"name":"Jane Doe","role":"Founder, Startup XYZ"}},{"text":"LandingAI has been a game-changer for my business. I've seen a huge increase in email sign-ups since I started using it.","person":{"name":"John Smith","role":"CEO, Company ABC"}}]}},"tone":"Friendly and professional","images":{"hero_prompt":"","features_prompt":""},"templates":[{"name":"landing_page-service-2","type":"hero"},{"name":"landing_page-service-2","type":"features"},{"name":"landing_page-service-2","type":"testimonials"}],"brand_name":"LandingAI","color_scheme":{"primary":"#F9ED69","tertiary":"#8D99AE","secondary":"#2B2D42","background":"#EEEEEE","light_primary":"#F9F7B9"}};

function GeneratedWebsite() {
  return (
    <>
      <Hero data={data} />
      <Features data={data} />
      <Testimonials data={data} />
      <Footer data={data} />
    </>
  );
}

export default GeneratedWebsite;