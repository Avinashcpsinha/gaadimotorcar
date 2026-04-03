import { pgTable, serial, text, integer, decimal, boolean, timestamp } from "drizzle-orm/pg-core";

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  make: text("make").notNull(),
  model: text("model").notNull(),
  year: integer("year").notNull(),
  price: decimal("price", { precision: 12, scale: 2 }).notNull(),
  fuelType: text("fuel_type").notNull(),
  transmission: text("transmission").notNull(),
  kmsDriven: integer("kms_driven").default(0),
  location: text("location").notNull(),
  mainImage: text("main_image").notNull(),
  category: text("category").notNull(), // SUV, Sedan, etc.
  description: text("description"),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  logoUrl: text("logo_url"),
  description: text("description"),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  mobile: text("mobile").notNull(),
  email: text("email").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  modelOfInterest: text("model_of_interest").notNull(),
  zipCode: text("zip_code"),
  comments: text("comments").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
