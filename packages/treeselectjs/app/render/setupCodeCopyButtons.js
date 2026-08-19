const setCopyState = (button, state) => {
  const previousTimeoutId = Number(button.dataset.timeoutId)

  if (previousTimeoutId) {
    window.clearTimeout(previousTimeoutId)
  }

  button.classList.remove('section__copy--copied', 'section__copy--error')

  if (state) {
    button.classList.add(`section__copy--${state}`)
    button.setAttribute('aria-label', state === 'copied' ? 'Code copied' : 'Copy failed')
  }

  button.dataset.timeoutId = String(
    window.setTimeout(() => {
      button.classList.remove('section__copy--copied', 'section__copy--error')
      button.setAttribute('aria-label', 'Copy code')
    }, 1200),
  )
}

export const setupCodeCopyButtons = () => {
  document.querySelectorAll('.section__copy').forEach((button) => {
    button.addEventListener('click', async () => {
      const code = button.parentElement?.querySelector('code')?.textContent

      if (!code) {
        setCopyState(button, 'error')
        return
      }

      try {
        await navigator.clipboard.writeText(code)
        setCopyState(button, 'copied')
      } catch {
        setCopyState(button, 'error')
      }
    })
  })
}
