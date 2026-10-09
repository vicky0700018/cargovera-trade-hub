<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the required TanStack Start routing shell; implement requested functionality as browser-only React with no added backend or UI libraries, because the hosting template requires its existing router.
- Keep CMS content in a shared React provider persisted to versioned localStorage, because public pages and demo administration must read the same data without a database.
- Use reusable first-party controls and a shared CSS token system across public and admin pages, because both experiences must retain one brand identity.
