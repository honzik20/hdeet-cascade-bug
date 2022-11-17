# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Compatibility

The HTA Hugo theme has been tested with:

* Hugo Extended 0.89.1
* Docsy commit 1b167606bd62d52097357d7cd533f7415a77d17d

## [2.6.0] - 2022-08-10

### Added

- Allowed _snippet_ and _download_ shortcodes to accept named parameters to facilitate site localization.
- Fixed shortcode topic to use only named parameters. While positional parameters can still be used, it's best practice for site localization to use named parameters.

## [2.5.0] - 2022-07-15

### Fixed

- Fixed bug where snippets appear as block elements. Snippet content is now markdownified.
- Fixed indentation of asides inside super-procedure blocks.
- Fixed line numbering in code blocks using the `code` shortcode.
- Fixed browser tab title: spaces now separate the pipe character in "Help title | Topic title"
- Added space between product and version in product-version and prod-ver shortcodes.

### Changed

- Upgraded Mermaid to version 9.1.2

## [2.4.0] - 2022-05-11

### Added

- Enabled blog section.
- Added ability to create Support Tracker issue from link in help. Define `params.support_tracker.project_id` and `params.github_repo` in the config.yml to enable link.
- Added tooltip to images inserted with the img shortcode. Tooltip text is the "alt" value. If alt is empty or value is "alt text", the tooltip doesn't appear.

### Fixed

- Fixed 404 when clicking on the homepage link in sidebar in a blog section.

## [2.3.3] - 2022-03-02

### Fixed

- Footer height wasn't being applied.

## [2.3.2] - 2022-02-28

### Fixed

- Set footer to 50px height.
- Fixed broken home page link.

## [2.3.1] - 2022-02-17

### Fixed

- Fixed a bug affecting non-"docs" sections (such as "blog") where the link to the section homepage in the toc was appended with `index.html`.

## [2.3.0] - 2022-02-16

### Added

- Added error checking and named parameters (`src` and `alt`) to `img` shortcode.
- Added ability to specify a class for the img shortcode (either class="toolbar-icon" or the 3rd positional parameter).
- Added "proc" shortcode for procedural steps and "superproc" shortcode for super-procedures.
- Added anchors to proc and sproc shortcodes.
- Right-align code blocks.
- Right-align procedure steps.
- Decreased right margin at smaller screen widths.
- Local hosting of Rubik and Tajawal fonts.
- Added 2-pixels of top padding on inline images so they sit on the baseline.
- `sproc` shortcodes to create super-procedures.
- iconmaterial shortcode now inserts regular (filled) icons as standard.
- iconmaterial shortcode can insert an outlined icon by passing the parameter `style="outlined"`.
- Made the download icon part of the download link in the download shortcode.

### Fixed

- In some circumstances, custom CSS files were not included. This has been fixed.
- Fixed _check_ shortcode.
- Scrolling to an anchor was hijacked if a Mermaid diagram was on the page. This is fixed.

## [2.2.1] - 2022-01-06

### Fixed

- Fixed error-checking in download shortcode.

## [2.2.0] - 2022-01-05

### Changed

- `product-ver` shortcode renamed to `prod-ver`.

### Added

- Error checking for `site-title` shortcode.
- When they cause an error, the following shortcodes now report line numbers where the shortcode appears:
    - download
    - prod-ver
    - product
    - product-version
    - site-title
    - snippet
    - version
    - xref

## [2.1.0] - 2022-01-05

### Added

* The `download` shortcode now throws an error when it can't find the referenced file.
* Change all existing icons to material-design-outlined.
* Make the icon-material shortcode use -outlined icons.
* Make the `check` and `yes` shortcodes produce green icons, the `cross` and `no` shortcodes produce orange icons.
* Vertically align Material Design icons (vertical-align: sub).
* Add material-design-outlined selector to css, so -outlined is treated the same way as solid.
* Add error-checking for `product`, `version`, `product-version` and `product-ver` shortcodes.

## [2.0.0] - 2021-12-08

### Changed

* BREAKING CHANGE: `awesome` shortcode renamed to `iconawesome`.
    * Note: Following branding guidelines, Material Design icons should be used instead of Font Awesome.

### Added

* `iconawesome` now accepts named parameters: `{{< iconawesome icon="face" color-"primary" >}}`.
* `iconawesome` shortcode now accepts a second parameter, `color` which applies a theme color to the icon. For example, `primary`, `warning`, `success`.
* New `iconmaterial` shortcode to insert Material Design icons: `{{< iconmaterial icon="build" color="success" >}}`.
* Added Material Design icon library.
* Fixed head-end partial not being applied.
* Now supports multiple custom css. Add multiple css in the `custom_css` param in the config file.

### Deleted

* Removed unused code from `pill` shortcode.
* Deleted custom.css from root --- not used.

## [1.1.0] - 2021-11-24

### Added

* Error-checking for snippets. Missing snippet in snippet shortcode now causes build failures and log an error in console.
* Improved error-handling for xref shortcode. Console error now shows which topic contains the bad link.
* Added publication date to footer, autoupdated when site is built. Enable with `params.ui.footer_published_date: true`.

## [1.0.1] - 2021-11-17

### Fixed

* Fixed text-indent property of lists.

## [1.0.0] - 2021-11-12

* Initial release.
