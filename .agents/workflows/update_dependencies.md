---
description: Update dependencies to fix lockfile mismatch for Next.js and @types/node
---

1. Navigate to project directory
```bash
cd /Users/mac/dev/2026/nunex.lat
```

// turbo
2. Install dependencies without frozen lockfile to update lockfile
```bash
pnpm install
```

// turbo
3. Update Next.js to version 16.x and @types/node to version 24.x
```bash
pnpm add next@16 @types/node@24 -D
```

// turbo
4. Reinstall to ensure lockfile is consistent
```bash
pnpm install
```

// turbo
5. Commit and push changes
```bash
git add package.json pnpm-lock.yaml

git commit -m "Update Next.js to 16 and @types/node to 24, fix lockfile"

git push origin main
```
