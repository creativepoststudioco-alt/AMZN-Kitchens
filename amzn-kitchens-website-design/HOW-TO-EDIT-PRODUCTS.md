# AMZN Kitchens — How to manage your products

Everything lives in **one file**: `src/data/products.ts`

## Add a product
Copy any existing `{ ... }` block, paste it before the closing `];`, and change the values.
It appears on the homepage grid automatically.

## Remove a product
Delete its whole `{ ... }` block. It disappears from the site.

## Fields
| Field | Meaning |
|---|---|
| `id` | Unique short id, e.g. `"veg-chopper-pro"`. Used in the page link `#/product/veg-chopper-pro`. |
| `name` | Product title. |
| `image` | Image URL **or** `/products/your-photo.jpg` |
| `shortDesc` | One line on the card. |
| `longDesc` | Paragraph on the details page. |
| `features` | Bullet list — add/remove lines freely. |
| `amazonIN` | Your Amazon.in affiliate URL. |
| `amazonUS` | Your Amazon.com affiliate URL. |

## Product images — one image per product
Every product has its **own independent `image` field**. Changing, replacing or
removing one product's image never affects any other product.

**To upload and connect your own photo:**
1. Create the folder `public/products/` (if it doesn't exist yet).
2. Drop your photo in, e.g. `public/products/veg-chopper.jpg`
   (square ~800×800 px JPG/PNG/WebP looks best).
3. In `src/data/products.ts`, find that product and set:
   `image: "/products/veg-chopper.jpg"`
   The file name after `/products/` must match your uploaded file exactly.

You can also paste any direct image URL instead of a local path.

**Missing image?** Set `image: ""` (or if a URL fails to load) and the site
automatically shows a tidy gold "Image coming soon" placeholder.

Images are displayed inside a consistent square area and are never stretched —
original proportions are always preserved.

The demo photos use the helper `img(123456)`. Replace that whole value with
your own path or URL.

## Hero image
The homepage hero photo lives in `src/assets/heroImage.ts`.
To use your own, open `src/components/Hero.tsx` and change
`src={heroImage}` to `src="/your-hero.jpg"` (file placed in `public/`).

## Affiliate links (India 🇮🇳 green / USA 🇺🇸 blue buttons)
Paste your real affiliate URLs into `amazonIN` / `amazonUS`.

- Empty (`""`) → the button shows **“Link coming soon”** and is not clickable.
- Filled in → the same button shows **“Shop Now”** and opens that product's own
  country-specific Amazon page in a new tab.

Each product has its own two links — nothing is shared globally.

## Publish
Run `npm run build` and upload the generated `dist/` folder.
