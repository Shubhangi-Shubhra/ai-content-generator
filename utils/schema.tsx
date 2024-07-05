import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),      // Define id as serial primary key
    formData: varchar('formData').notNull(),  // Define formData as varchar not null
    aiResponse: text('aiResponse'),     // Define aiResponse as text
    templateSlug: varchar('templateSlug').notNull(),  // Define templateSlug as varchar not null
    createdBy: varchar('createdBy').notNull(),  // Define createdBy as varchar not null
    createdAt: varchar('createdAt')    // Define createdAt as varchar
});
