This is a fork for Grist.

The global goal is to apply CSS rules to the whole Grist document - so they'll apply after the standard CSS rules.

Presently a CSS can be defined at Server's level in a static file, but this solution can't apply when one wants a CSS per document - especially in large implementations serving multiple clients.

# Configuration

## Define a new Parameter in Grist Document Parameters (along with Time Zone, Language, Currency...)

This will contain a whole CSS definition.

### Parameter  
  - name : documentCSS (or suggest another)
  - multi-line field to hold the CSS

One should probably build on DocSettingsPage in /app/client/components/GristDoc.ts, import { DocSettingsPage } from "app/client/ui/DocumentSettings";

### Security

It might be wise to check that the CSS is valid and reasonnably safe.

On the other hand, it's quite hackish, so why would it be limited, as long as it creates no risk to data?

# Delivery

## Inject the CSS

/app/server/lib/ICreate.ts should read the configuration option documentCSS, load the CSS as defined, and inject it in /static/app/html by extending or duplicating getExtraHeadHtml

## Debugging

If such a function is ancillary in Grist world, add a way to debug - such as checkboxes next the option, to "Don't inject / Apply to Owners only / Apply to all users" - or similar

# More info

Let's try to keep this fork as simple and light as possible.
