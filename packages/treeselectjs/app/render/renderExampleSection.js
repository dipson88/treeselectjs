export const renderExampleSection = ({ sectionId, value, options, treeselectId, codeSnipped }) => {
  const section = document.getElementById(sectionId)
  const div = document.createElement('div')
  div.classList.add('section__data')

  if (codeSnipped) {
    const code = codeSnipped.trim()

    div.innerHTML = `
      <div id=${treeselectId} class="section__select"></div>
      <pre class="section__props" style="width: 100%; max-width: 100%"><code class="language-javascript" data-language="javascript">${code}</code></pre>
    `
  } else {
    const code = `parentHtmlContainer: document.querySelector(className),
value: ${JSON.stringify(value, null, 0).replace(/,/g, ', ')},
options: ${JSON.stringify(options, null, 2)}`

    div.innerHTML = `
      <div id=${treeselectId} class="section__select"></div>
      <pre class="section__props"><code class="language-javascript" data-language="javascript">${code}</code></pre>
    `
  }

  section.appendChild(div)
}
