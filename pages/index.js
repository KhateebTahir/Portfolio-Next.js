import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

import { Container, Button } from "reactstrap";

class Index extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Container>
          <Button outline color="danger">
            danger
          </Button>
        </Container>
      </BaseLayout>
    );
  }
}

export default Index;
