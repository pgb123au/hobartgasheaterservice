# DO NOT BUILD/DEPLOY FROM THIS LOCAL SOURCE (2026-06-07)

The LIVE production site (https://hobartgasheaterservice.com.au) is CORRECT and serving the right
business identity. This local `src/` tree is CORRUPTED (stale wrong-identity clone
remnants from Syncthing churn — Codex audit 2026-06-07 found Pakenham plumbing content here that
belongs to another site). There is NO git repo to restore correct source from.

==> Running `npm run build && netlify deploy` here will OVERWRITE the correct live site
    with the broken identity. DO NOT DO IT.

Correct path: rebuild this site from scratch via the /rank-rent skill (clone the right
canonical + localise), verify, THEN deploy. Current good Netlify deploy id recorded in
_audit/codex-reports/rank-rent-2026-06-06/clone_protect.json for rollback.
