import { Link } from "react-router-dom";
import { Button } from "./../../components/ui/button";
import Testimonial from "./../../components/shopping-view/testimonial";
import Footer from "./footer";

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl font-extrabold text-primary leading-tight">
            About Clean Mart
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to Clean Mart, your one-stop destination for a wide range of high-quality products 
            at competitive prices. Our mission is to provide an exceptional shopping experience 
            to our valued customers.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="my-12 space-y-8">
          <h2 className="text-3xl font-extrabold text-primary">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded in [Year], Clean Mart began with a simple vision: to make online shopping easier, 
            more enjoyable, and accessible for everyone. Over the years, we have grown into one of the 
            leading e-commerce platforms, serving millions of happy customers worldwide. At Clean Mart, 
            innovation and customer satisfaction are at the heart of everything we do.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Clean Mart, our vision is to become the most trusted online marketplace, delivering a 
              seamless, personalized, and secure shopping experience for all our customers. 
              We aim to redefine online shopping with innovative solutions and a customer-first approach.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clean Mart's mission is to offer a vast selection of products, backed by exceptional 
              customer service, speedy delivery, and easy returns. We are committed to exceeding our 
              customers' expectations and making every shopping experience a positive one.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <Testimonial />

        {/* Contact Us Section */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-extrabold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Have questions or need help? The Clean Mart team is always here to assist you!
          </p>
          <Link to="/shop/contact">
            <Button className="mt-6 px-8 py-3 text-lg font-semibold bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
