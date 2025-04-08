
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    const { name, email, subject, message, phone = "Non fourni" } = formData;

    // Email to the user (confirmation)
    const userEmailResponse = await resend.emails.send({
      from: "MigraPro <onboarding@resend.dev>", // Update with your domain once verified
      to: [email],
      subject: "Confirmation de votre message | MigraPro",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #2563eb;">Merci de nous avoir contactés !</h1>
          <p>Cher(e) ${name},</p>
          <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés. Un membre de notre équipe vous répondra dans les plus brefs délais.</p>
          <p>Voici un récapitulatif de votre message :</p>
          <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <p><strong>Sujet :</strong> ${subject}</p>
            <p><strong>Message :</strong> ${message}</p>
          </div>
          <p>Si vous avez des questions supplémentaires, n'hésitez pas à nous contacter.</p>
          <p>Cordialement,</p>
          <p><strong>L'équipe MigraPro</strong></p>
        </div>
      `,
    });

    // Email to the company
    const companyEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Update with your domain once verified
      to: ["contact@migrapro.com"], // Replace with your company email
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #2563eb;">Nouveau message de contact</h1>
          <p>Vous avez reçu un nouveau message de contact du site web:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            <p><strong>Sujet :</strong> ${subject}</p>
            <p><strong>Message :</strong> ${message}</p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", {
      user: userEmailResponse,
      company: companyEmailResponse
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
