# arc-esm-uhoh

arc 9.5 bug where a required .js file contains the words "require" and "import" -- even as strings.

```
npm i
npx arc deploy --dry-run
```

```
File: /Users/tbeseda/dev/scratch/arc-esm/src/http/get-index/uhoh.js
Error: Found both 'import' and 'require' statements in /Users/tbeseda/dev/scratch/arc-esm/src/http/get-index/uhoh.js
    at findLambdaDeps (/Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/hydrate/src/actions/autoinstall/find-lambda-deps.js:19:38)
    at /Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/hydrate/src/actions/autoinstall/get-lambda-deps.js:24:22
    at Array.forEach (<anonymous>)
    at getDirDeps (/Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/hydrate/src/actions/autoinstall/get-lambda-deps.js:22:9)
    at /Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/hydrate/src/actions/autoinstall/index.js:42:20
    at Array.forEach (<anonymous>)
    at Object.autoinstaller [as autoinstall] (/Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/hydrate/src/actions/autoinstall/index.js:34:8)
    at hydrator (/Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/hydrate/src/index.js:141:26)
    at /Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/hydrate/src/index.js:36:12
    at done (/Users/tbeseda/dev/scratch/arc-esm/node_modules/@architect/inventory/src/index.js:100:7)
```
