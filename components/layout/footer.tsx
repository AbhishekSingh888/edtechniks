import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company Name</h3>
            <p className="mb-4 text-sm">
              Providing innovative technology solutions for educational institutions and businesses since 2008.
            </p>
            <div className="flex space-x-4">{/* Social media icons would go here */}</div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>E-Learning & Smart Class Solutions</li>
              <li>Software Solutions</li>
              <li>Hardware Solutions</li>
              <li>Infrastructure Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span>123 Technology Park, Main Street, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                <span>info@techcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
