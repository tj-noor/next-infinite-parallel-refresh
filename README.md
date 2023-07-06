## Issue

During local development `next dev`, a nested page inside of a parallel route without a corresponding matched route inside another parallel route causes an infinite reload, despite the required [default](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs) file meant to render as a fallback.

## Links

- https://github.com/vercel/next.js/pull/52061
- https://github.com/vercel/next.js/issues/51951
- https://github.com/vercel/next.js/issues/49881#issuecomment-1618501628

## Steps

1. install packages - `pnpm install`
2. run next dev - `pnpm dev`
3. navigate to `http://localhost:3000/home/nested` directly to experience the infinite refresh right away.
   - Timestamp will update on each render.
   - Server logs from the middleware will populate on each reload
4. alternatively, navigate to `http://localhost:3000/home/` and then click on the hard navigation and/or the next link for `http://localhost:3000/home/nested`
   - hard navigation link refreshes infinitely
   - next link behaves as expected and does not refresh infinitely

Reproduced with `next@13.4.9-canary.2`

## next info

    Operating System:
      Platform: darwin
      Arch: arm64
      Version: Darwin Kernel Version 22.5.0: Thu Jun  8 22:22:23 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6020
    Binaries:
      Node: 18.16.0
      npm: 9.5.1
      Yarn: N/A
      pnpm: 8.6.5
    Relevant Packages:
      next: 13.4.9-canary.2
      eslint-config-next: 13.4.8
      react: 18.2.0
      react-dom: 18.2.0
      typescript: 5.1.6
    Next.js Config:
      output: N/A

---

This is a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

## Getting Started

These are the steps you should follow when creating a bug report:

- Bug reports must be verified against the `next@canary` release. The canary version of Next.js ships daily and includes all features and fixes that have not been released to the stable version yet. Think of canary as a public beta. Some issues may already be fixed in the canary version, so please verify that your issue reproduces before opening a new issue. Issues not verified against `next@canary` will be closed after 30 days.
- Make sure your issue is not a duplicate. Use the [GitHub issue search](https://github.com/vercel/next.js/issues) to see if there is already an open issue that matches yours. If that is the case, upvoting the other issue's first comment is desireable as we often prioritize issues based on the number of votes they receive. Note: Adding a "+1" or "same issue" comment without adding more context about the issue should be avoided. If you only find closed related issues, you can link to them using the issue number and `#`, eg.: `I found this related issue: #3000`.
- If you think the issue is not in Next.js, the best place to ask for help is our [Discord community](https://nextjs.org/discord) or [GitHub discussions](https://github.com/vercel/next.js/discussions). Our community is welcoming and can often answer a project-related question faster than the Next.js core team.
- Make the reproduction as minimal as possible. Try to exclude any code that does not help reproducing the issue. E.g. if you experience problems with Routing, including ESLint configurations or API routes aren't necessary. The less lines of code is to read through, the easier it is for the Next.js team to investigate. It may also help catching bugs in your codebase before publishing an issue.

## How to use this template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example reproduction-template reproduction-app
```

```bash
yarn create next-app --example reproduction-template reproduction-app
```

```bash
pnpm create next-app --example reproduction-template reproduction-app
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to Contribute to Open Source (Next.js)](https://www.youtube.com/watch?v=cuoNzXFLitc) - a video tutorial by Lee Robinson
- [Triaging in the Next.js repository](https://github.com/vercel/next.js/blob/canary/contributing.md#triaging) - how we work on issues
- [CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on CodeSandbox

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

If your reproduction needs to be deployed, the easiest way is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
