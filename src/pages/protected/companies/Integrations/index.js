import * as integrationsNames from "./constants";
import { callTracking } from "./call-tracking/route";
import { websiteMetrics } from "./website-metrics/route";
import { marketingPerformance } from "./marketing-performance/route";
import { websiteLead } from "./website-leads/route";

const listOfIntegrations = [];

listOfIntegrations[integrationsNames.MARKETING_PERFORMANCE] =
  marketingPerformance;
listOfIntegrations[integrationsNames.WEBSITE_METRICS] = websiteMetrics;
listOfIntegrations[integrationsNames.WEBSITE_LEADS] = websiteLead;
listOfIntegrations[integrationsNames.CALL_TRAKING] = callTracking;

let userPermissions = [
  "marketing-performance",
  "website-metrics",
  "website-leads",
  "call-tracking",
  "call-tracking",
];

let InegrationsRoutes = [];

for (let slug in listOfIntegrations) {
  if (userPermissions.indexOf(slug) !== -1) {
    InegrationsRoutes.push(listOfIntegrations[slug]);
  }
}
//console.log("hi", InegrationsRoutes);

export default InegrationsRoutes;

// Jib la list dial les integrations li kayning 3nd username
//  looper f la lsit o verifier si ite
