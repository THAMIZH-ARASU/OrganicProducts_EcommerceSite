import React from 'react';
import { EmailField } from '@hilla/react-components/EmailField.js';
import { Tooltip } from '@hilla/react-components/Tooltip.js';
import { Icon } from '@hilla/react-components/Icon.js';
import '@vaadin/icons';

const EmailEntry = () => {
  return (
    <EmailField 
        label="Subscribe to our Newsletter for immediate updates" 
        helperText="Only example.com addresses allowed" 
        placeholder="Enter email address" clearButtonVisible>
      <Tooltip slot="tooltip" text="Tooltip text" />
      <Icon slot="prefix" icon="vaadin:envelope" />
    </EmailField>
  );
}


export default EmailEntry;