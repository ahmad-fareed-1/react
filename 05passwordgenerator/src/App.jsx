import { useState, useCallback, useRef, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false); // 🟢 For animation

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) {
      characters += '0123456789';
    }
    if (charAllowed) {
      characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    let pass = '';
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
    setCopied(true); // Show animation
    setTimeout(() => setCopied(false), 1500); // Hide after 1.5 sec
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 relative">
        <h1 className="text-white text-center my-3 text-xl font-bold">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 relative">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-700 text-white px-3 transition-colors duration-300 hover:bg-blue-800"
          >
            Copy
          </button>

          {/* Animated "Copied!" message */}
          {copied && (
            <span className="absolute -top-6 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded transition-opacity duration-500 animate-fade">
              Copied!
            </span>
          )}
        </div>

        <div className="flex items-center text-sm gap-x-2 mb-3">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2 mb-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Include Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
