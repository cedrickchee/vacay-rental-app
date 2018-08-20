import * as React from "react";
import { RegisterView } from "./ui/RegisterView";

// container -> view (presentational)
// container -> connector -> view (presentational)

// Naming convention
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}
