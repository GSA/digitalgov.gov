---
slug: search-creating-a-good-multilingual-search-experience
date: 2015-08-31 11:10:46 -0400
title: "Search, Buscar, Поиск, جستجو, Cari: Creating a Good, Multilingual Search Experience"
summary: "In 2015, DigitalGov Search dramatically expanded support for languages on our search results page, expanding from just English and Spanish to support 68 different languages."

authors:
  - dmccleskey
topics:
  - search
  - multilingual

---

In 2015, [DigitalGov Search](https://www.search.gov/) dramatically expanded support for languages on our search results page, expanding from just English and Spanish to support [68 different languages](https://search.gov/admin-center/dashboard/supported-languages.html). Government agencies across the United States publish content in a growing number of languages to do the business of the country. Language-specific websites and mobile apps include not just translated content, but also site navigation and other lexical elements.

{{< legacy-img src="2015/08/600-human-word-cloud-kgtoh-481085576.jpg" alt="A word cloud of the word human, in multiple language and colors." caption="kgtoh/iStock/Thinkstock" >}}

This month marks the 15th anniversary of [EO 13166](https://www.lep.gov/13166/eo13166.html), which directed federal agencies and federally funded programs to provide meaningful access to information for people with limited English proficiency. In the years since its signing, over 275 websites or subsites have been published in over 65 languages, including a few multilingual portals. If your agency supports sites or apps in other languages, [let us know about them](https://www.surveymonkey.com/r/BCZRZ6C)!

See, for instance, [USAGov en Espa&#241;ol](https://www.usa.gov/espanol/) (_formerly known as GobiernoUSA.gov_) or the [Spanish-language U.S. Citizenship and Immigration Services site](https://www.uscis.gov/espanol). And beyond thinking about the experience of non-English speaking site visitors in the U.S., many agencies have websites intended for audiences around the globe. The Department of State, for instance, has a local-language website for nearly all embassies and consulates. Imagine how jarring it would be, then, for a site visitor to run a search and find themselves on a results page written in English.

When a search is configured for another language, two major changes occur. First, search results will be primarily in that language. The language of the page is determined in two ways: by the locale setting in the page’s metadata, and by search indexes that detect non-English words on the page and place a tag in their indexes with a best guess as to the language of the page. Second, the interface of the search results page is localized—any words that would appear on the page are presented to the user in the selected language, as you see on this search for &#8216;[información sobre mi caso&#8217; on USCIS.gov/es](https://search.uscis.gov/search?affiliate=uscis_gov_es&query=informacion+sobre+mi+caso). This full and thoughtful translation of a system into another language is called [localization](https://en.wikipedia.org/wiki/Internationalization_and_localization).

By now we are all familiar with on-the-fly translation services like [Google Translate](https://translate.google.com/) and [other online services](https://duckduckgo.com/?q=online+translator), and are aware of the problems with [accuracy in machine-generated translations](https://digital.gov/resources/introduction-to-translation-technology/). If you have not yet run a paragraph through an online translator and then had it re-translated back into English, you should give it a try sometime when you need a chuckle. Humans are still the most reliable translators from one language into another, because we understand how word choices change based on context and location.

All system text used in DigitalGov Search results pages has been crafted by people, who know, for instance, which of the [six French words for &#8220;related&#8221;](https://translate.google.com/#auto/fr/related) is the right one for our “Related Searches” feature. (Hint: it’s not the one the computer recommends.) We also support right-to-left languages (like Arabic, Hebrew, and Urdu), and re-organize the page to support site users in their right-to-left searching.

The following 58 languages have fully localized results page support with both language-specific results and [localized system text](https://github.com/GSA/punchcard/tree/master/localizations). (A big shout out to the USAGov en Espa&#241;ol and Department of State teams for the localized text. Thanks!)


<table class="usa-table usa-table--striped">
<caption>A bordered, three-column table with horizontal stripes.</caption>

<tbody>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/sq.yml">Albanian</a> [SQ]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ha.yml">Hausa</a> [HA]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/pt.yml">Portuguese</a> [PT]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/am.yml">Amharic</a> [AM]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/he.yml">Hebrew</a> [HE]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/pa.yml">Punjabi</a> [PA]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ar.yml">Arabic</a> [AR]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/hi.yml">Hindi</a> [HI]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ru.yml">Russian</a> [RU]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/hy.yml">Armenian</a> [HY]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/hu.yml">Hungarian</a> [HU]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/sr.yml">Serbian</a> [SR]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/az.yml">Azerbaijani</a> [AZ]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/id.yml">Indonesian</a> [ID]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/sd.yml">Sindhi</a>‎ [SD]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/be.yml">Belarusian</a> [BE]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/it.yml">Italian</a> [IT]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/sk.yml">Slovak</a> [SK]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/bs.yml">Bosnian</a> [BS]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/kl.yml">Kalaallisut</a> [KL]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/so.yml">Somalian</a> [SO]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/bg.yml">Bulgarian</a> [BG]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/km.yml">Khmer</a> [KM]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/es.yml">Spanish</a> [ES]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ca.yml">Catalan</a> [CA]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ko.yml">Korean</a> [KO]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/sw.yml">Swahili</a> [SW]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/zh.yml">Chinese</a> [ZH]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ky.yml">Kyrgyz</a> [KY]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/tl.yml">Tagalog</a> [TL]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/hr.yml">Croatian</a> [HR]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/lv.yml">Latvian</a> [LV]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/tg.yml">Tajik</a> [TG]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/cs.yml">Czech</a> [CS]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/lt.yml">Lithuanian</a> [LT]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/th.yml">Thai</a> [TH]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/da.yml">Danish</a> [DA]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/mk.yml">Macedonian</a> [MK]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/tr.yml">Turkish</a> [TR]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/nl.yml">Dutch</a> [NL]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ms.yml">Malay</a> [MS]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/tk.yml">Turkmen</a> [TK]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/en.yml">English</a> [EN]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/mn.yml">Mongolian</a> [MN]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/uk.yml">Ukrainian</a> [UK]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/et.yml">Estonian</a> [ET]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/me.yml">Montenegrin</a> [ME]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ur.yml">Urdu</a> [UR]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/fr.yml">French</a> [FR]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/no.yml">Norwegian</a> [NO]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/uz.yml">Uzbek</a> [UZ]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ka.yml">Georgian</a> [KA]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/ps.yml">Pashto</a> [PS]</td>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/vi.yml">Vietnamese</a> [VI]</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/de.yml">German</a> [DE]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/fa.yml">Persian</a> [FA]</td>
<td>&nbsp;</td>
</tr>

<tr>
<th scope="row"><a href="https://github.com/GSA/search-gov/blob/main/config/locales/el.yml">Greek</a> [EL]</th>
<td><a href="https://github.com/GSA/search-gov/blob/main/config/locales/pl.yml">Polish</a> [PL]</td>
<td>&nbsp;</td>
</tr>

</tbody>
</table>

Ten more — Baluchi, Bangla, Creole, Finnish, Icelandic, Japanese, Kazakh, Romanian, Slovene, and Swedish — provide language-specific results, but don’t yet have localized system text. We have open-sourced our [localizations](https://github.com/GSA/punchcard/tree/master?tab=readme-ov-file#localizations-l10n), and encourage you to [contribute to them on GitHub](https://github.com/GSA/search-gov/blob/main/CONTRIBUTING.md).

The next time your agency is setting up a non-English website, don’t forget about providing your visitors with a localized search experience, too. It’s easy. We’ve done the heavy lifting for you. Just sign up for [DigitalGov Search](https://www.search.gov), set up a search site for any of the above languages, and your visitors will have a good, seamless search experience—in any language.
