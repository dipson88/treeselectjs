export const renderExampleSection = ({ sectionId, value, options, treeselectId, codeSnipped }) => {
  const section = document.getElementById(sectionId)
  const div = document.createElement('div')
  div.classList.add('section__data')

  if (codeSnipped) {
    div.innerHTML = `
      <div id=${treeselectId} class="section__select"></div>
      <pre class="section__props" style="width: 100%; max-width: 100%">
        <code data-language="javascript">
  ${codeSnipped}
        </code>
      </pre>
    `
  } else {
    div.innerHTML = `
      <div id=${treeselectId} class="section__select"></div>
      <pre class="section__props">
        <code data-language="javascript">
  <b>parentHtmlContainer:</b> document.querySelector(className),
  <b>value:</b> ${JSON.stringify(value, null, 0).replace(/,/g, ', ')},
  <b>options:</b> ${JSON.stringify(options, null, 2)}
        </code>
      </pre>
    `
  }

  section.appendChild(div)
}
