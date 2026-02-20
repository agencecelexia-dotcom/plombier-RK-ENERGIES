"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceOptions = [
  "Urgence / Depannage",
  "Plomberie generale",
  "Renovation salle de bain",
  "Chauffage",
  "Chauffe-eau",
  "Autre",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get("nom") as string,
      telephone: formData.get("telephone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string || "Autre",
      message: formData.get("message") as string,
      _gotcha: formData.get("_gotcha") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          Demande envoyee !
        </h3>
        <p className="text-neutral-600">
          Nous vous recontactons sous 48h. Pour une urgence, appelez-nous directement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div role="alert" className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          <AlertCircle className="w-4 h-4" />
          Une erreur est survenue. Veuillez reessayer.
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nom">Nom *</Label>
          <Input id="nom" name="nom" required placeholder="Votre nom" className="focus:ring-accent-500 focus:border-accent-500" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone">Telephone *</Label>
          <Input id="telephone" name="telephone" type="tel" required placeholder="06 XX XX XX XX" className="focus:ring-accent-500 focus:border-accent-500" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="votre@email.fr" className="focus:ring-accent-500 focus:border-accent-500" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Type de besoin</Label>
        <Select name="service">
          <SelectTrigger id="service">
            <SelectValue placeholder="Selectionnez un service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Decrivez votre besoin..."
          rows={4}
          className="focus:ring-accent-500 focus:border-accent-500"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          required
          className="mt-1 w-4 h-4 accent-accent-500 rounded border-neutral-300"
        />
        <Label htmlFor="rgpd" className="text-xs text-neutral-500 font-normal leading-relaxed">
          J&apos;accepte que mes donnees soient utilisees pour me recontacter dans le cadre de ma demande. Voir notre politique de confidentialite.
        </Label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-accent-500 text-white rounded-lg font-medium text-sm transition-all duration-200 hover:bg-accent-600 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none inline-flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}
