import getConfig from "next/config";

// Used to provide autocompletion for the config defined in next.config.js.
// See that file for more information on why we use this.
export function getRuntimeConfig(): RuntimeConfig {
  return getConfig().publicRuntimeConfig;
}

export type RuntimeConfig = {
  environment: "production" | "development";
  backendOrigin: string;
  frontendOrigin: string;
  fxaOrigin: string;
  fxaLoginUrl: string;
  fxaLogoutUrl: string;
  premiumProductId: string;
  emailSizeLimitNumber: number;
  emailSizeLimitUnit: string;
  maxFreeAliases: number;
  mozmailDomain: "mozmail.com";
  googleAnalyticsId: `UA-${number}-${number}`;
  maxOnboardingAvailable: number;
  featureFlags: Record<
    "generateCustomAliasMenu" | "generateCustomAliasSubdomain" | "generateCustomAliasTip",
    boolean
  >;
};
