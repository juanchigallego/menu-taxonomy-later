import { Box, Text, Button } from "@nimbus-ds/components";
import { Page } from "@nimbus-ds/patterns";

export default function Billing() {
  const headerButtons = (
    <>
      <Button>Costos por transacción</Button>
      <Button>Acreditar cupón</Button>
      <Button>Historial de facturas</Button>
    </>
  );

  return (
    <Page maxWidth="800px">
      <Page.Header
        title="Pagos & suscripciones"
        buttonStack={headerButtons}
        data-style="page-override"
      />
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
          <Text>
            Este es el contenido para la página de Pagos & suscripciones
          </Text>
        </Box>
      </Page.Body>
    </Page>
  );
}
