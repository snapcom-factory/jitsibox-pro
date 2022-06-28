import { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import "./CustomKeyboard.css";

const CustomKeyboard = () : React.ReactElement => {
  const [currentLayout, setCurrentLayout] = useState<string>('defaultCaps');
  const [value, setValue] = useState<string>('');

  const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

  const handleSpecialKeys = (button : string) => {
    if (button === "{switch}") {
      setCurrentLayout(currentLayout.includes('default') ? 'numpad' : 'default');
    } else if (button === "{shift}") {
      setCurrentLayout(currentLayout === 'default' ? 'defaultCaps' : 'default');
    } else if (currentLayout === 'defaultCaps' && alphabet.toUpperCase().includes(button)) {
      setCurrentLayout('default');
    }
  }

  return (
    <div>
      <input className='input' value={value} style={{ width: '100vw', height: '5vh', fontSize: '2em' }}/>
      {currentLayout === 'numpad' ? (
        <div className='side-panel' />
      ) : null}
      <Keyboard
        onChange={input => setValue(input)}
        onKeyPress={(button : string) => handleSpecialKeys(button)}
        layoutName={currentLayout}
        display={{
          '{bksp}': "⌫",
          '{shift}': "⇧",
          '{switch}': "123 ⇄ ABC",
          '{enter}': "⇨",
        }}
        layout={{
          default: [
            '1 2 3 4 5 6 7 8 9 0 {bksp}',
            'a z e r t y u i o p {enter}',
            'q s d f g h j k l m _',
            '{shift} w x c v b n - {switch}',
          ],
          defaultCaps: [
            '1 2 3 4 5 6 7 8 9 0 {bksp}',
            'A Z E R T Y U I O P {enter}',
            'Q S D F G H J K L M _',
            '{shift} W X C V B N - {switch}',
          ],
          numpad: [
            '1 2 3',
            '4 5 6',
            '7 8 9',
            '{switch} 0 {bksp}',
          ]
        }}
        theme={`hg-theme-default keyboard ${currentLayout === 'numpad' ? 'numpad' : ''}`}
        buttonTheme={currentLayout !== 'numpad' ? ([
          {
            class: "keyboard-classic-buttons",
            buttons: `${alphabet} ${alphabet.toUpperCase()} 0 1 2 3 4 5 6 7 8 9 _ - {bksp} {enter}`,
          }, {
            class: "keyboard-long-buttons",
            buttons: "{shift} {switch}"
          }
        ]) : ([
          {
            class: "keyboard-numpad-buttons",
            buttons: '1 2 3 4 5 6 7 8 9 0 {bksp} {switch}',
          }
        ])}
      />
      {currentLayout === 'numpad' ? (
        <div className="side-panel" style={{ right: '0'}} />
      ) : null}
    </div>
  )
}

export default CustomKeyboard;