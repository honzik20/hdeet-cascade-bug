# Modifying the HTA Hugo theme

Pointers for modifying the HTA Hugo theme.

All locations in this document are relative to the root of the Hugo HTA Theme at `hta-ToolsHugo/hugosite/themes/hta.hugo.assets`.  

## CSS

* Add CSS overrides to `assets/scss/_styles_project.scss`
	
	* EXCEPTION: If you're updating the CSS for Prism.js, add the new CSS to `static/css/prism.css`. 

* Modify theme colours and fonts in `assets/scss/_variables_project.scss`.
## JavaScript

Add updates to JavaScript files to `static/js`.

* Mathjax scripts are in `static/js/mathjax`.

## PrismJS

PrismJS is a syntax highlighter. The CSS and JS assets should cover the languages you'd expect in tech documentation but if you need more, you can augment the current selection. Click the following link to add more languages:

https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+apacheconf+asciidoc+aspnet+bash+basic+batch+bbcode+c+csharp+cpp+coffeescript+css-extras+diff+docker+excel-formula+git+go+http+hpkp+hsts+json+json5+liquid+markdown+markup-templating+matlab+mongodb+objectivec+powerquery+powershell+regex+rest+sass+scss+shell-session+toml+typescript+vbnet+vim+visual-basic+wiki+xml-doc+yaml&plugins=line-highlight+line-numbers+autolinker+show-language+remove-initial-line-feed+command-line+normalize-whitespace+toolbar+copy-to-clipboard+filter-highlight-all

Then download the assets and place them in the folders 

* CSS - `static/css`
* JS -   `static/js` 

> Remember to update the link above.