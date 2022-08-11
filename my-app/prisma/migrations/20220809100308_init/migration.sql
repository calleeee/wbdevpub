/*
  Warnings:

  - Added the required column `posted` to the `Ref` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ref" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "posted" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "descrip" TEXT NOT NULL
);
INSERT INTO "new_Ref" ("descrip", "id", "title") SELECT "descrip", "id", "title" FROM "Ref";
DROP TABLE "Ref";
ALTER TABLE "new_Ref" RENAME TO "Ref";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
