import lunr from "/Users/gudupao/Downloads/TransSoul/Wiki/node_modules/lunr/lunr.js";
require("/Users/gudupao/Downloads/TransSoul/Wiki/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/Users/gudupao/Downloads/TransSoul/Wiki/node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh.js").lunrLanguageZh(lunr);
require("/Users/gudupao/Downloads/TransSoul/Wiki/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const language = ["zh","en"];
export const removeDefaultStopWordFilter = false;
export const removeDefaultStemmer = false;
export const Mark = null;
export const searchIndexUrl = "search-index{dir}.json?_=b7bb19ab";
export const searchResultLimits = 8;
export const searchResultContextMaxLength = 50;
export const explicitSearchResultPath = false;
export const searchBarShortcut = true;
export const searchBarShortcutHint = true;
export const searchBarPosition = "right";
export const docsPluginIdForPreferredVersion = undefined;
export const indexDocs = true;
export const searchContextByPaths = null;
export const hideSearchBarWithNoSearchContext = false;
export const useAllContextsWithNoSearchContext = false;