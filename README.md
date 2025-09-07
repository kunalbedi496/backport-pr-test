# Backport Test Repo

This repository is set up to test **automatic backporting** using GitHub Actions.

## Workflow

- Add a label starting with `backport-` (e.g., `backport-v5`) to a **draft PR**.
- The workflow will:
  - Squash commits from the PR branch.
  - Push a new branch named `backport-<pr-branch>`.
  - Open a backport PR against the `release-branch`.

## Files
- `.github/workflows/backport.yml` → contains the GitHub Actions workflow.

---
Happy backporting 🚀
