import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  userEmail: string;
  msg: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  userEmail,
  msg
}) => (
  <div>
    <h4>Name: {firstName}</h4>
    <h4>Email: {userEmail}</h4>
    <p>
      {msg}
    </p>
  </div>
);

export default EmailTemplate;