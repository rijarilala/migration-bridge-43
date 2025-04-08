
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Map from "@/components/Map";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Call the Supabase Edge Function to send emails
      const response = await fetch(
        "https://wegzylnyopbcnutmtigk.supabase.co/functions/v1/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi du message");
      }
      
      // Show success message
      toast.success("Message envoyé avec succès !");
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(error instanceof Error ? error.message : "Une erreur s'est produite lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-secondary/20 to-background/0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 gradient-text">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une question ? Une demande de devis ? Nous sommes là pour vous aider. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
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
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              {submitted ? (
                <div className="text-center h-full flex flex-col items-center justify-center py-8">
                  <div className="text-green-500 mb-4">
                    <CheckCircle size={64} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                  <p className="text-gray-600 mb-6">
                    Merci de nous avoir contactés. Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>
                    Envoyer un nouveau message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6">Envoyez-nous un message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom complet</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre nom" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="votre@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Téléphone (optionnel)</FormLabel>
                              <FormControl>
                                <Input placeholder="+261 XX XX XXX XX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sujet</FormLabel>
                              <FormControl>
                                <Input placeholder="Sujet de votre message" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Détaillez votre demande ici..." rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                            Envoi en cours...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send size={16} className="mr-2" />
                            Envoyer
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
