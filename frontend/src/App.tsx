import React from 'react';
import Quiz from './components/Quiz';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Quiz />
      </div>
    </I18nextProvider>
  );
};

export default App;
