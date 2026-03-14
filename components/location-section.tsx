import { MapPin, Clock, Phone } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase mb-3">
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Find Our Restaurant
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Located in the heart of Dehradun, we're easy to find and always ready to serve you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110206.79603882236!2d77.92663812652427!3d30.32434547356749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moksh Venture Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rajpur Road, Near Clock Tower<br />
                    Dehradun, Uttarakhand 248001<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p className="flex justify-between gap-8">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-card-foreground">11:00 AM - 10:30 PM</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium text-card-foreground">10:00 AM - 11:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Contact</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>
                      <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                        +91 98765 43210
                      </a>
                    </p>
                    <p>
                      <a href="mailto:hello@mokshventure.com" className="hover:text-primary transition-colors">
                        hello@mokshventure.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
