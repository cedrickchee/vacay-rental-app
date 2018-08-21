import * as React from "react";
import { RegisterController } from "@vacay/controller";

import { RegisterView } from "./ui/RegisterView";

// container -> view (presentational)
// container -> connector -> view (presentational)

// Naming convention
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
