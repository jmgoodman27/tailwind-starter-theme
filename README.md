# Tailwind Starter Theme

This theme is built off of Shopify starter theme with the purpose of integrating [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/)

To use this theme with Slate, run the following command in your terminal:

```
$ npm create slate-theme my-new-theme jmgoodman27/tailwind-starter-theme
```

For more information on connecting your new project with a Shopify store, see the [Slate docs](https://github.com/Shopify/slate/wiki/3.-Connect-to-your-store).

Tailwind is integrated through PostCSS and is configured in slate.config.js. For production builds (npm run build), PurgeCSS is used to remove unused CSS from Tailwind and other Sass files. Autoprefixer and cssnano are then run afterwards as specified in Slate's webpack config.

Since Tailwind uses PostCSS, updates to tailwind.js while developing will be immediately reflected.

Tailwind.js can utilize CSS custom properties, making these the perfect method for assigning settings from the Shopify editor to Tailwind utilities. Slate uses the file css-variables.liquid to define custom properties in the root. 

Settings from Tailwind can be used throughout Sass by using the [config function](https://tailwindcss.com/docs/functions-and-directives/#config) like below: 

```
.custom { 
    color: config('colors.blue');
}
```

There is no need to disable Tailwind modules as PurgeCSS will remove any unused functionality for production. This theme will come with a mostly out of the box Tailwind configuration so that its use matches the [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/) as closely as possible.

This theme continues to use Shopify [helper scripts](https://github.com/Shopify/theme-scripts/tree/master/packages) and [lazysizes](https://github.com/aFarkas/lazysizes) for responsive image lazy loading like Starter Theme. 
