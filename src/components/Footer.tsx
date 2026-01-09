import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border/70">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={`${import.meta.env.BASE_URL}new-logo.png`} alt="Unitech" className="h-11 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Manufacturing premium audio equipment and electronics since 1999. Trusted by professionals across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-card/60 hover:bg-primary border border-border/40 hover:border-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-9 h-9 bg-card/60 hover:bg-primary border border-border/40 hover:border-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-9 h-9 bg-card/60 hover:bg-primary border border-border/40 hover:border-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all">
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-9 h-9 bg-card/60 hover:bg-primary border border-border/40 hover:border-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all">
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm tracking-wide uppercase">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/products/tower-speakers" className="text-muted-foreground hover:text-primary transition-colors">Tower Speakers</a></li>
              <li><a href="/products/home-theatre-systems" className="text-muted-foreground hover:text-primary transition-colors">Home Theatre</a></li>
              <li><a href="/products/dth-receivers" className="text-muted-foreground hover:text-primary transition-colors">DTH Receivers</a></li>
              <li><a href="/products/car-stereo-systems" className="text-muted-foreground hover:text-primary transition-colors">Car Audio</a></li>
              <li><a href="/products/audio-amplifiers" className="text-muted-foreground hover:text-primary transition-colors">Amplifiers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm tracking-wide uppercase">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Warranty Information</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm tracking-wide uppercase">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:unitechindia@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  unitechindia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-muted-foreground">
                  Customer Support Available
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-muted-foreground">
                  Pan-India Delivery
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 py-5 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-muted-foreground">
              © 2024 UNITECH INDIA. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
