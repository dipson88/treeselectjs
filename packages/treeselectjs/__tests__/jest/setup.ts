import * as ResizeObserverPolyfillModule from 'resize-observer-polyfill'

// resize-observer-polyfill ships a plain CJS export (no __esModule flag), so a default
// import silently resolves to the whole module namespace instead of the class when
// esModuleInterop is off - fall back to the namespace itself in that case.
const ResizeObserverPolyfill = (
  (ResizeObserverPolyfillModule as unknown as { default?: typeof ResizeObserver }).default ??
  ResizeObserverPolyfillModule
) as typeof ResizeObserver

global.ResizeObserver = ResizeObserverPolyfill
