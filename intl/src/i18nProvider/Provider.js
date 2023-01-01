import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './constants';
import messages from './messages';


const Provider = ({ children, locale }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={messages[locale]}
  >
    
    {children} 
  </IntlProvider>
);



Provider.defaultProps = {
  locale: LOCALES.ENGLISH,
};

export default Provider;
