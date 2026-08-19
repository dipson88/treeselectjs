const renderCodeBlock = (code, style = '') => {
  const copyButton = `<button class="section__copy" type="button" aria-label="Copy code"><svg class="section__copy-icon" aria-hidden="true" viewBox="0 0 24 24"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M5 15V7a2 2 0 0 1 2-2h8"></path></svg></button>`

  return `<pre class="section__props"${style}>${copyButton}<code class="language-javascript" data-language="javascript">${code}</code></pre>`
}

export const renderExampleSection = ({ sectionId, value, options, treeselectId, codeSnipped }) => {
  const section = document.getElementById(sectionId)
  const div = document.createElement('div')
  div.classList.add('section__data')

  if (codeSnipped) {
    const code = codeSnipped.trim()

    div.innerHTML = `
      <div id=${treeselectId} class="section__select"></div>
      ${renderCodeBlock(code, ' style="width: 100%; max-width: 100%"')}
    `
  } else {
    const code = `parentHtmlContainer: document.querySelector(className),
value: ${JSON.stringify(value, null, 0).replace(/,/g, ', ')},
options: ${JSON.stringify(options, null, 2)}`

    div.innerHTML = `
      <div id=${treeselectId} class="section__select"></div>
      ${renderCodeBlock(code)}
    `
  }

  section.appendChild(div)
}
