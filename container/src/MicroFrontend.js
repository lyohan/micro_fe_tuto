import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function MicroFrontend({ name, host }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`
    console.log('aaa', name)
    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`)
    }

    if (document.getElementById(scriptId)) {
      return renderMicroFrontend()
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement('script')
        script.id = scriptId
        console.log('aaaaa', window.renderCats)
        script.crossOrigin = ''
        script.src = `${host}${manifest.files['main.js']}`
        script.onload = () => {
          renderMicroFrontend()
        }
        document.head.appendChild(script)
      })
    
      return () => {
        window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`)
      }
  }, [name, host])

  return <main id={`${name}-container`} />
}

MicroFrontend.defaultProps = {
  document,
  window,
}

export default MicroFrontend
