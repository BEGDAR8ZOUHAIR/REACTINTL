import React, {useState} from 'react';
import logo from './logo.svg';
import {FormattedMessage} from "react-intl";
import './App.css';

import { I18nPropvider, LOCALES } from './i18nProvider';
import translate from "./i18nProvider/translate";


function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nPropvider locale={locale}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            <FormattedMessage id="hello" />
          </h1>
          <h2>
            Not translated part. {translate('hello')}
          </h2>
          
          <p>
            {translate('about')}
            <hr />
          <p />
            {translate('edit-file', {file: <code>src/App.js</code>})}
            <hr/>
          </p>
        

       
          <div className="button">
          <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
          <button onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
            <button onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
            <button onClick={() => setLocale(LOCALES.ARABIC)}>Arabic</button>
          </div>
        </header>
      </div>
    </I18nPropvider>
  );
}

export default App;
