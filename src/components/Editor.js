import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {

    const {
        language, displayName, value, onChange
    } = props

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value)
    }

  return (
    <div className={`editor-container ${open ? '' : 'collapse'}`}>
        <div className='editor-title'>
            {displayName}
            <button className='open-close-btn' onClick={() => setOpen(prevOpen => !prevOpen)}><FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}/></button>
        </div>
        <ControlledEditor 
            className='code-mirror-wrapper'
            onBeforeChange={handleChange}
            value={value}
            options={
                {
                    lineWrapping: true,
                    lint: true,
                    theme: 'material',
                    mode: language,
                    lineNumbers: true
                }
            }
        />
    </div>
  )
}

export default Editor