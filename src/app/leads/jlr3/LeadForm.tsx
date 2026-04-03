"use client";

import { useState } from "react";
import { submitLead } from "./actions";
import { CheckCircle2, AlertCircle, Loader2, ChevronRight } from "lucide-react";

const MODELS = [
  "Range Rover",
  "Range Rover Sport",
  "Range Rover Velar",
  "Range Rover Evoque",
  "Defender 90",
  "Defender 110",
  "Defender 130",
  "Discovery",
  "Discovery Sport",
  "Jaguar F-TYPE",
  "Jaguar F-PACE",
  "Jaguar I-PACE",
];

const STATES = [
  "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Uttar Pradesh", "West Bengal", "Telangana", "Rajasthan", "Punjab", "Haryana"
];

const CITIES: Record<string, string[]> = {
  "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Uttar Pradesh": ["Lucknow", "Noida", "Kanpur"],
  "West Bengal": ["Kolkata", "Howrah"],
  "Telangana": ["Hyderabad"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar"],
  "Haryana": ["Gurugram", "Faridabad"],
};

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await submitLead(formData);

    setLoading(false);
    if (result.success) {
      setSuccess(true);
    } else if (result.error) {
      setError(result.error);
    }
  }

  if (success) {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center animate-fade">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-500/20 p-4 rounded-full">
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Thank You</h2>
        <p className="text-gray-400 max-w-sm mx-auto mb-8">
          Your interest in Jaguar Land Rover has been registered. Our relationship manager will contact you shortly to schedule your personalized experience.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="text-white/60 hover:text-white transition-colors text-sm font-medium underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
      {/* Decorative gradient overlay */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
      
      <h2 className="text-2xl font-bold text-white mb-8 font-display flex items-center gap-3">
        Register Your Interest
        <div className="h-px bg-white/20 flex-1"></div>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">First Name *</label>
            <input
              name="firstName"
              required
              placeholder="e.g. John"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Last Name *</label>
            <input
              name="lastName"
              required
              placeholder="e.g. Doe"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Mobile Number *</label>
            <input
              name="mobile"
              required
              placeholder="+91 00000 00000"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="john.doe@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">State *</label>
            <select
              name="state"
              required
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-gray-900">Select State</option>
              {STATES.map(s => <option key={s} value={s} className="bg-gray-900">{s}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">City *</label>
            <select
              name="city"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-gray-900">Select City</option>
              {selectedState && CITIES[selectedState]?.map(c => (
                <option key={c} value={c} className="bg-gray-900">{c}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Zip Code</label>
            <input
              name="zipCode"
              placeholder="000 000"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Model of Interest *</label>
          <select
            name="modelOfInterest"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="bg-gray-900">Choose your model</option>
            {MODELS.map(m => <option key={m} value={m} className="bg-gray-900">{m}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Comments *</label>
          <textarea
            name="comments"
            required
            rows={4}
            placeholder="Tell us about your requirements..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-all resize-none"
          />
        </div>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-lg flex items-center gap-3 animate-fade">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-3 transition-all group/btn"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Submit Request
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
