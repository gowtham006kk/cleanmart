import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Navigation */}
        <div>
          <h4 className="font-bold text-lg mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/shop/home" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop/categories" className="hover:text-primary transition">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/shop/brands" className="hover:text-primary transition">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/shop/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="h-6 w-6 hover:text-primary transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="h-6 w-6 hover:text-primary transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="h-6 w-6 hover:text-primary transition" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to receive updates, exclusive deals, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border rounded-md focus:outline-primary w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <Link to='/contact' className="font-bold text-lg mb-4">Contact Us</Link>
          <div className="flex items-start space-x-2 mb-2"> 
          </div>
          <div className="flex items-start space-x-2 mb-2">
            <Phone className="w-5 h-5 text-primary" />
            <span>(91)6369250169</span>
          </div>
          <div className="flex items-start space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <span>g8474096@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} CleanMart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
