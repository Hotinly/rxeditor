import {RXEditor} from "../core/rxeditor"
import {RXEditorCommandProxy} from "../core/rxeditor-command-proxy"
import loadElements from "../elements/index"

export default function initEditor(){
  window.rxEditor = new RXEditor
  window.RXEditorCommandProxy = RXEditorCommandProxy
  loadElements(window.rxEditor)
}