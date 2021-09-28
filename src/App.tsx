import React from 'react';
import './App.css';
import i18n from 'i18next';

import { Trans, useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  
  const onChangeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React i18next</h1>

        <select onChange={onChangeLanguage}>
          <option value="en">English</option>
          <option value="nl">Nederlands</option>
        </select>

        <h2>Simple</h2>
        <p>{t('teamMember')}</p>
        
        <h2>Plural</h2>
        <p>{t('teamMember', { count: 2 })}</p>

        <h2><code>Trans</code> component</h2>
        <p>
          <Trans i18nKey="teamMember">Fallback text here</Trans>
        </p>
        
        <h2>Nested</h2>
        <p>{t('errors.404')}</p>
        
        <h2>Context</h2>
        <p>{t('gender', { context: 'male' })}</p>
      </header>
    </div>
  );
}

export default App;
