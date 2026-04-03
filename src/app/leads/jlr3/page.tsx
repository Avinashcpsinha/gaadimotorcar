import type { Metadata } from "next";
import LeadForm from "./LeadForm";
import Image from "next/image";
import { ShieldCheck, Calendar, Trophy, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Jaguar Land Rover | Experience Luxury",
  description: "Register your interest for the latest Range Rover and Jaguar models. Personalized drive experiences and exclusive offers available.",
};

export default function JLRLeadsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      {/* Premium Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-[0.2em] font-display">
          JAGUAR <span className="opacity-40">|</span> LAND ROVER
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/60">
          <span>Explore Models</span>
          <span>Experiences</span>
          <span>Contact</span>
        </div>
      </header>

      <main className="relative pt-24">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jlr-landing.png"
            alt="Range Rover"
            fill
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/10 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content side */}
          <div className="space-y-12 max-w-xl animate-fade">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.25em] rounded">
                Exclusive Invitation
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight">
                Refined Luxury. <br />
                <span className="text-white/40">Unmatched Power.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Step into a world where performance meets prestige. Join the elite who command the road with sophistication.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-3">
                <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Priority Booking</h3>
                <p className="text-sm text-gray-500">Get early access to upcoming model launches and exclusive test drives.</p>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Premium Care</h3>
                <p className="text-sm text-gray-500">Complimentary 5-year service packages for registered members.</p>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Bespoke Options</h3>
                <p className="text-sm text-gray-500">Customize your vehicle with SV Bespoke materials and finishes.</p>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Instant Access</h3>
                <p className="text-sm text-gray-500">Digital concierge service for a seamless ownership experience.</p>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:sticky lg:top-32 animate-fade delay-200">
            <LeadForm />
            
            <p className="mt-8 text-center text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
              By submitting this form, you agree to our <span className="underline cursor-pointer">Privacy Policy</span> and authorize JLR India to contact you regarding your interest.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-24 bg-black/40">
        <div className="container mx-auto px-6 text-center text-xs font-medium tracking-[0.3em] text-white/30 uppercase">
          © 2024 JAGUAR LAND ROVER LIMITED INC. • ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
