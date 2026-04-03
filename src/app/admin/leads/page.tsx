import { db } from "@/db";
import { leads } from "@/db/schema";
import { desc } from "drizzle-orm";
import { LayoutDashboard, Users, Calendar, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-2xl shadow-lg shadow-primary/20">
              <LayoutDashboard className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 font-display">Lead Management Dashboard</h1>
              <p className="text-slate-500 text-sm">Monitor and manage your JLR interest registrations.</p>
            </div>
          </div>
          
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6">
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Leads</p>
              <p className="text-xl font-bold text-slate-900">{allLeads.length}</p>
            </div>
            <div className="h-8 w-px bg-slate-100"></div>
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth</p>
              <p className="text-xl font-bold text-emerald-500">+12%</p>
            </div>
          </div>
        </header>

        {/* Table Section */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
             <h2 className="font-bold text-slate-800 flex items-center gap-2">
                <Users size={18} className="text-primary" />
                Recent Submissions
             </h2>
             <button className="text-sm font-bold text-primary hover:underline">Export to CSV</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80">
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider pl-8">Client</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Info</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Location</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Model of Interest</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider pr-8">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {allLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="p-4 pl-8">
                       <div className="font-bold text-slate-900 font-display">{lead.firstName} {lead.lastName}</div>
                       <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                          <span>ID: #{lead.id}</span>
                       </div>
                    </td>
                    <td className="p-4 text-sm">
                       <div className="flex items-center gap-2 text-slate-600 mb-1">
                          <Mail size={14} className="text-slate-300" />
                          <span>{lead.email}</span>
                       </div>
                       <div className="flex items-center gap-2 text-slate-600">
                          <Phone size={14} className="text-slate-300" />
                          <span>{lead.mobile}</span>
                       </div>
                    </td>
                    <td className="p-4 text-sm">
                       <div className="flex items-center gap-2 text-slate-700 font-medium">
                          <MapPin size={14} className="text-primary/60" />
                          <span>{lead.city}, {lead.state}</span>
                       </div>
                       {lead.zipCode && <span className="text-xs text-slate-400 ml-5">ZIP: {lead.zipCode}</span>}
                    </td>
                    <td className="p-4">
                       <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
                          {lead.modelOfInterest}
                       </span>
                    </td>
                    <td className="p-4 text-sm text-slate-500">
                       <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-slate-300" />
                          <span>{new Date(lead.createdAt!).toLocaleDateString('en-IN')}</span>
                       </div>
                    </td>
                    <td className="p-4 pr-8">
                       <button 
                         className="bg-slate-100 hover:bg-primary hover:text-white p-2 rounded-xl transition-all"
                         title={lead.comments}
                       >
                          <MessageSquare size={18} />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {allLeads.length === 0 && (
            <div className="p-20 text-center text-slate-400 italic">
               No registrations found in the database.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 17.292l-4.5-4.364 1.417-1.417 3.083 3l7.083-7.5 1.417 1.417-8.5 8.864z" />
    </svg>
  );
}
