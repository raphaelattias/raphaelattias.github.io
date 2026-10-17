# Raphaël Attias

Personal website at [raphaelattias.com](https://raphaelattias.com), built with Jekyll and hosted on GitHub Pages.

The design uses a narrow reading column, Helvetica typography, simple navigation, and system light/dark appearance, inspired by [Jared Palmer’s website](https://jaredpalmer.com/). Helvetica uses the visitor’s installed font, with Arial and sans-serif fallbacks. Code blocks use a system monospace font.

## Run locally

The existing GitHub Pages dependency lockfile uses Bundler 2.2.32. With a compatible Ruby installed:

```sh
gem install bundler -v 2.2.32
bundle install
bundle exec jekyll serve --host 127.0.0.1 --destination .jekyll-output
```

Open `http://127.0.0.1:4000`. To verify the production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build --safe --destination .jekyll-output
```

Use `.jekyll-output` for local builds so the historical, tracked `_site` snapshot stays untouched.

The JavaScript build scripts in `package.json` belong to the original theme. The current layout does not need a Node.js build. A small JavaScript file opens the photo easter egg in a native dialog.

## Update content

- `_pages/about.md`: homepage biography.
- `_pages/cv.md`: experience and education.
- `_config.yml`: profile metadata and social links.
- `_data/navigation.yml`: header navigation.
- `_posts/`: project writeups, with their existing URLs.
- `_publications/`: research publications.
- `assets/css/site.css`: shared styles.

The original project files and documents remain available at their existing URLs. The current CV is the HTML page at `/cv/`; older PDFs in `files/` are historical documents.
