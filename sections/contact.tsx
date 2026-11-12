"use client";

import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FormField } from "@/components/ui/form-field";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

type FormValues = {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { nombre: "", telefono: "", email: "", mensaje: "" };
const phonePattern = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]?\d{2}){4}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.nombre.trim().length < 2) {
    errors.nombre = "Veuillez saisir votre nom complet.";
  }
  if (!phonePattern.test(values.telefono.trim())) {
    errors.telefono = "Veuillez saisir un numéro de téléphone valide (ex: 02 43 28 85 90 ou 06 45 89 12 34).";
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Veuillez saisir une adresse e-mail valide.";
  }
  if (values.mensaje.trim().length < 10) {
    errors.mensaje = "Décrivez-nous brièvement vos besoins (minimum 10 caractères).";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setValues(initialValues);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Contact"
          title="Réservez votre première visite"
          description="Dites-nous ce dont vous avez besoin et nous vous répondrons dans les 24 heures ouvrables."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div
                role="status"
                className="flex h-full min-h-[26rem] flex-col items-center justify-center gap-4 rounded-3xl border border-teal-100 bg-teal-50/60 p-10 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-teal-600" aria-hidden="true" />
                <h3 className="font-heading text-xl font-semibold text-slate-900">
                  Message envoyé avec succès !
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                  Merci de nous avoir contactés. Notre équipe vous répondra
                  dans les 24 heures ouvrables.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/[0.02] sm:p-9"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Nom complet"
                    name="nombre"
                    autoComplete="name"
                    placeholder="Marie Dupont"
                    value={values.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                    error={errors.nombre}
                  />
                  <FormField
                    label="Téléphone"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    placeholder="02 43 28 85 90"
                    value={values.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                    error={errors.telefono}
                  />
                </div>

                <FormField
                  label="Adresse e-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="marie@email.com"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={errors.email}
                />

                <FormField
                  as="textarea"
                  label="Message"
                  name="mensaje"
                  placeholder="Décrivez-nous le traitement qui vous intéresse ou le motif de votre consultation..."
                  value={values.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  error={errors.mensaje}
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="text-xs leading-relaxed text-slate-500">
                  En soumettant ce formulaire, vous acceptez notre{" "}
                  <a href="/politique-confidentialite" className="font-medium text-blue-700 hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Adresse de la clinique</p>
                  <p className="text-sm text-slate-600">
                    {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                    {siteConfig.address.city}
                  </p>
                  {"transit" in siteConfig.address && (
                    <p className="mt-1 text-xs text-slate-500">
                      {siteConfig.address.transit}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-slate-900">Téléphones</p>
                  <div className="text-sm text-slate-600">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-400 block">Accueil / Standard :</span>
                    <a href={siteConfig.phoneHref} className="font-medium text-slate-700 hover:text-blue-700">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="text-xs font-medium uppercase tracking-wide text-teal-600 block">Ligne Alternative & Urgences :</span>
                    <a href={siteConfig.altPhoneHref} className="font-medium text-slate-700 hover:text-blue-700">
                      {siteConfig.altPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-slate-900">E-mails</p>
                  <div className="text-sm text-slate-600">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-400 block">Contact général :</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-slate-700 hover:text-blue-700"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="text-xs font-medium uppercase tracking-wide text-blue-600 block">Rendez-vous & Devis :</span>
                    <a
                      href={`mailto:${siteConfig.altEmail}`}
                      className="font-medium text-slate-700 hover:text-blue-700"
                    >
                      {siteConfig.altEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-slate-900">Horaires d&apos;ouverture</p>
                  {siteConfig.schedule.map((item) => (
                    <p key={item.days} className="text-sm text-slate-600">
                      <span className="font-medium text-slate-700">{item.days}:</span> {item.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-64 overflow-hidden rounded-3xl border border-slate-200 sm:h-full">
              <iframe
                title={`Carte de localisation de ${siteConfig.name}`}
                src={siteConfig.mapEmbedSrc}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
