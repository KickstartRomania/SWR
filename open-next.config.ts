// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
	// Every page is prerendered at build time and only changes on deploy, so serve the
	// prerendered output from static assets instead of re-rendering on each request.
	// See https://opennext.js.org/cloudflare/caching for more details
	incrementalCache: staticAssetsIncrementalCache,
	enableCacheInterception: true,
});
