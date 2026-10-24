---
"treeselectjs": patch
---

Performance: list option items are no longer created in the constructor but built in idle time (or on the first open, if that comes earlier), cloned from item templates, and skipped by the browser when scrolled out of view (`content-visibility`). `updateDOM` no longer re-applies static padding/attributes or re-parses unchanged SVG icons.
