import { useRouteError } from "react-router-dom";

import { Box, Text } from "@nimbus-ds/components";
import { Page } from "@nimbus-ds/patterns";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Page maxWidth="800px">
      <Page.Header title="Error" data-style="page-override" />
      <Page.Body data-style="page-override">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="4"
          borderColor="neutral-surfaceHighlight"
          backgroundColor="neutral-background"
          borderStyle="dashed"
          borderWidth="1"
          borderRadius="2"
          minHeight="375px"
          width="100%"
        >
          <Text>{error.statusText || error.message}</Text>
        </Box>
      </Page.Body>
    </Page>
  );
}
