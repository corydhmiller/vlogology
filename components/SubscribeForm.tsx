import React from 'react';
import ConvertKitForm from 'convertkit-react';

import styles from '../styles/modules/convertkit.module.scss';

const CKFormID = 287935;

const SubscribeForm = () => (
  <div className={styles.form}>
    <ConvertKitForm formId={CKFormID} />
  </div>
);
export default SubscribeForm;
