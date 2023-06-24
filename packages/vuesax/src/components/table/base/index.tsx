import { App, Plugin } from "vue";

import Table from "./table.tsx";

Table.install = (app: App) => {
  app.component(Table.name, Table);
  return app;
};

export default Table as typeof Table & Plugin;
