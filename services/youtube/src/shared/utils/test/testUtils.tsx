import { render } from "@testing-library/react";
import { QueryProvidersForTest } from "../../components/QueryProvider/QueryProviderForTest";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvidersForTest>{children}</QueryProvidersForTest>;
};

function customRender(ui: React.ReactElement, options?: {}) {
  return render(ui, { wrapper: Provider, ...options });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
