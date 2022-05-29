import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  isComplete: boolean().notNull(),
  createdAt: timestamp({ withTimezone: true, precision: 3 }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true, precision: 3 }).defaultNow().notNull().$onUpdate(() => new Date()),
})
