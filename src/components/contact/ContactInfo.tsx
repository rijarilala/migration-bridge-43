
import { Mail, Phone, MapPin } from "lucide-react";
import Map from "@/components/Map";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Adresse</h3>
              <p className="text-gray-600">Lot 108T Moramanga 514, Madagascar</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <a href="mailto:contact@migrapro.com" className="text-primary hover:underline">
                contact@migrapro.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Téléphone</h3>
              <a href="tel:+261340535068" className="text-primary hover:underline">
                +261 34 05 350 68
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rounded-xl overflow-hidden">
        <Map />
      </div>
    </>
  );
};

export default ContactInfo;
