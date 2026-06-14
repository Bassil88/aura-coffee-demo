Inspect the routing architecture.

Current state:
- app/de/*
- app/en/*
- app/[locale]/*

Problem:
- Navbar appears on /de and /en pages
- Navbar does NOT appear on /de/impressum
- Navbar does NOT appear on /de/datenschutz

Tasks:

1. Determine which routing architecture should be used:
   A) app/de + app/en
   B) app/[locale]

2. Explain why Navbar is missing.

3. Show the exact file hierarchy causing the issue.

4. Propose the smallest fix.

5. Do NOT modify any files.

6. Output:
   - root cause
   - affected files
   - recommended fix