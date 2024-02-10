import { configResponsive, useResponsive as useAhooksResponsive } from "ahooks";

import defaultTheme from "@/theme/default";

configResponsive(defaultTheme.breakpoints.values);

type Breakpoints = keyof typeof defaultTheme.breakpoints.values;

type Return = {
  [K in Breakpoints]: boolean;
};

function useResponsive(): Return {
  return useAhooksResponsive() as Return;
}

export default useResponsive;
