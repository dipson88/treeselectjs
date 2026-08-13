---
'treeselectjs': patch
---

Fix UMD build exposing `window.treeselectjs` instead of `window.Treeselect`, which broke the documented `new Treeselect(...)` usage from a plain `<script>` tag.
