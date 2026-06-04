"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Indiquez votre nom.";
    if (!form.organization.trim()) nextErrors.organization = "Indiquez votre structure.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Indiquez une adresse email valide.";
    }
    if (!form.message.trim() || form.message.trim().length < 12) {
      nextErrors.message = "Décrivez votre besoin en quelques mots.";
    }
    return nextErrors;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      name: true,
      organization: true,
      email: true,
      phone: true,
      message: true
    });

    if (hasErrors) return;

    setSubmitted(true);
    setForm(initialState);
    setTouched({});
  }

  function fieldError(field: keyof FormState) {
    return touched[field] ? errors[field] : undefined;
  }

  return (
    <form className="slide-panel rounded-lg p-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Nom"
          value={form.name}
          error={fieldError("name")}
          required
          onBlur={() => setTouched((current) => ({ ...current, name: true }))}
          onChange={(value) => updateField("name", value)}
        />
        <Field
          id="organization"
          label="Structure"
          value={form.organization}
          error={fieldError("organization")}
          required
          onBlur={() => setTouched((current) => ({ ...current, organization: true }))}
          onChange={(value) => updateField("organization", value)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          error={fieldError("email")}
          required
          onBlur={() => setTouched((current) => ({ ...current, email: true }))}
          onChange={(value) => updateField("email", value)}
        />
        <Field
          id="phone"
          label="Téléphone"
          type="tel"
          value={form.phone}
          onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
          onChange={(value) => updateField("phone", value)}
        />
      </div>
      <div className="mt-5">
        <label className="text-sm font-bold text-ink" htmlFor="message">
          Message <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          className="mt-2 w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-ink shadow-sm transition placeholder:text-ink/45 focus:border-secondary"
          value={form.message}
          required
          aria-invalid={Boolean(fieldError("message"))}
          aria-describedby={fieldError("message") ? "message-error" : undefined}
          onBlur={() => setTouched((current) => ({ ...current, message: true }))}
          onChange={(event) => updateField("message", event.target.value)}
        />
        {fieldError("message") ? (
          <p id="message-error" className="mt-2 text-sm font-semibold text-red-700">
            {fieldError("message")}
          </p>
        ) : null}
      </div>
      <Button className="mt-6 w-full sm:w-auto" type="submit">
        Envoyer la demande
        <Send aria-hidden="true" className="ml-2 h-4 w-4" />
      </Button>
      {submitted ? (
        <p className="mt-5 rounded-md bg-secondary/10 p-4 font-semibold text-ink" role="status">
          Merci, votre message est prêt à être traité. En V1, aucun email n'est envoyé automatiquement.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  required = false,
  onBlur,
  onChange
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  required?: boolean;
  onBlur: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-bold text-ink" htmlFor={id}>
        {label} {required ? <span className="text-orange">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        className="mt-2 w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-ink shadow-sm transition placeholder:text-ink/45 focus:border-secondary"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
