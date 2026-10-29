import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "fshl79a5",
    dataset: "production",
  },
  studioHost: "lacasadepastel",
  deployment: { autoUpdates: true, appId: "lws2ka5nqfbaglnks9unx75o" },
});
