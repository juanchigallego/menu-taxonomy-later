import { Button, Icon, Link } from "@nimbus-ds/components";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import { EmptyMessage, Page } from "@nimbus-ds/patterns";

export default function Pos() {
  return (
    <Page maxWidth="800px">
      <Page.Header title="Punto de venta" data-style="page-override" />
      <Page.Body data-style="page-override">
        <EmptyMessage
          title="Tu nuevo aliado para vender en persona"
          text="Con el nuevo punto de venta integrado, todo lo que hacés en tu tienda física queda registrado en tu Tiendanube. ¡Empezá a usarlo ahora y comprobalo!"
          illustration={
            <img
              alt="Punto de venta"
              width="100%"
              src="images/empty-customers 1.png"
            />
          }
          actions={
            <>
              <Button appearance="primary">Empezar</Button>
              <Link appearance="primary" textDecoration="none">
                Más sobre Punto de venta
                <Icon color="currentColor" source={<ExternalLinkIcon />} />
              </Link>
            </>
          }
        />
      </Page.Body>
    </Page>
  );
}
