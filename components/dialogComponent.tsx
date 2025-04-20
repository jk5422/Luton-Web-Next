"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Fixed import

export function DialogComponent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setSuccess("Inquiry submitted successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess(data?.error || "Failed to submit inquiry.");
      }
    } catch {
      setLoading(false);
      setSuccess("Something went wrong.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer">Inquiry</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit Inquiry</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="col-span-4"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                className="col-span-4"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-3">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                className="col-span-4 resize-none h-[7rem]"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
        {success && <p className="text-center text-green-500">{success}</p>}
      </DialogContent>
    </Dialog>
  );
}
