"use server";

import { db } from "@/db";
import { leads } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function submitLead(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const mobile = formData.get("mobile") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const modelOfInterest = formData.get("modelOfInterest") as string;
  const zipCode = formData.get("zipCode") as string;
  const comments = formData.get("comments") as string;

  if (!firstName || !lastName || !email || !mobile || !city || !state || !modelOfInterest || !comments) {
    return { error: "Please fill in all mandatory fields." };
  }

  try {
    await db.insert(leads).values({
      firstName,
      lastName,
      email,
      mobile,
      city,
      state,
      modelOfInterest,
      zipCode: zipCode || null,
      comments,
    });

    revalidatePath("/leads/jlr3");
    return { success: true };
  } catch (error) {
    console.error("Database insert error:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}
