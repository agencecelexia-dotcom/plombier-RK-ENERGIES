"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

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
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border bg-brand-green/5 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-brand-green mx-auto mb-4" />
        <h3 className="text-xl font-bold text-primary mb-2">
          Demande envoyee !
        </h3>
        <p className="text-muted-foreground">
          Nous vous recontactons sous 48h. Pour une urgence, appelez-nous directement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          <AlertCircle className="w-4 h-4" />
          Une erreur est survenue. Veuillez reessayer.
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nom">Nom *</Label>
          <Input id="nom" name="nom" required placeholder="Votre nom" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone">Telephone *</Label>
          <Input id="telephone" name="telephone" type="tel" required placeholder="06 XX XX XX XX" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="votre@email.fr" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Type de besoin</Label>
        <Select name="service">
          <SelectTrigger>
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
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          required
          className="mt-1 rounded border-input"
        />
        <Label htmlFor="rgpd" className="text-xs text-muted-foreground font-normal leading-relaxed">
          J&apos;accepte que mes donnees soient utilisees pour me recontacter dans le cadre de ma demande. Voir notre politique de confidentialite.
        </Label>
      </div>

      <Button type="submit" size="lg" className="w-full" data-track="formulaire-contact-envoi">
        <Send className="w-4 h-4 mr-2" />
        Envoyer ma demande
      </Button>
    </form>
  );
}
