# Migration Endpoints


- mocks/ are expected output for migration, what we want
- endpoints/ is the actual output for each endpoint for testing/comparison
- run locally or on federalist and visit the below urls for each content type for the json endpoint 

## meeting notes

- make aliases absolute not relative?
- we need to escape quotes for fields to avoid json errors
- object to json
- find a tool to escape quotes in fields
- we don't need the value, just a list of id's for a reference
- remove un-needed fields
- rename aliases to redirects
- only need the uid for the primary image
- setup endpoint for all redirects that are not short posts
- if a resource is redirected, remove from the resources endpoint
- use relative filepath for unique id, move shortposts to own content/short-posts
- prefer filepath not the abs url for each item record
- update make svg path abs
- https://github.com/GSA/digitalgov.gov/pull/7840/files implement?
- update fields to machine name
- separate redirects by external, internal, 301s
- to page should be abs path, from can be filepath
  - "public_page": "/topics/usability/"

## notes

1. fix invalid json
2. remove duplicate keys for each type
3. add missing fields for completeness for each type
4. add content to json output
5. create endpoints for short-post




| content      | json serializer                        | endpoint                                      | notes |
| ------------ | -------------------------------------- | --------------------------------------------- | ----- |
| authors      | layouts/shortcodes/api-authors.html    | http://localhost:1313/authors/v1/json/        | valid |
| news         | layouts/news/list.json.json            | http://localhost:1313/news/index.json         | valid |
| short post   | layouts/shortcodes/api-shortposts.html | http://localhost:1313/short-posts/v1/json/    | valid |
| events       | layouts/events/list.json.json          | http://localhost:1313/events/index.json       | valid |
| communities  | communities/list.json.json             | http://localhost:1313/communities/index.json  | valid |
| guides       | default/list.json.json                 |                                               | wip   |
| resources    | layouts/resources/list.json.json       | http://localhost:1313/resources/index.json    | valid |
| topics       | topics/v1/json                         | http://localhost:1313/topics/v1/json/         | wip   |
| sources      | sources/list.json.json                 | http://localhost:1313/sources/index.json      | valid |
| ~~services~~ | ~~default/list.json.json~~             | ~~yes~~                                       |       |
| redirects    | default/list.json.json                 |                                               | wip   |
  

## create shortposts

1. get all shortpost

```bash
rg 'source_url' content/news | choose --field-separator ':' 0
```

2. copy or move to content/short-posts

```bash
for file in "${shortposts[@]}"; do
  # copy file to content/shortposts
  cp "$file" content/short-posts/
done
```

3. 

# Endpoints

## Authors
http://localhost:1313/authors/v1/json/

Replace `agency` with `agency_full_name`?

### Issues

Replace single quotes to double quotes for 'Abby' to "Abby" for display_name/
content/authors/abigail-abby-bowman/_index.md


## Communities

What data from community lists do we need, check with drupal form.
Match field names to drupal fields.


### Issues

Multiple community lists:

- content/communities/artificial-intelligence.md
- content/communities/blockchain.md
- content/communities/results-oriented-accountability-for-grants.md

## Events
http://localhost:1313/events/index.json


### Issues
- Should we display blank fields like kicker with empty string or do not include?


## Resources
http://localhost:1313/resources/index.json

Only gets resources that are internal, excludes resources with source_url.

### Issues


## News
http://localhost:1313/news/index.json

Only gets news that are internal, excludes resources with source_url

### Issues

Removed special formatting for:
- news/2023/06/2023-06-08-making-the-big-move-special-report-search-in-support-of-federal-web-modernization.md
- news/2021/12/2021-12-20-new-on-section508-gov-integrating-accessibility-into-deia-implementation-plans.md


## Short Posts
http://localhost:1313/short-posts/v1/json/


### Issues

Cleaned up front matter escaping

- news/2022/11/2022-11-25-accessibility-testing-for-onrr-gov.md
- news/2020/06/2020-06-23-diga-o-marque-2-usagov-en.md

Some short posts have source_url with no value and were removed.

- content/resources/deceptive-design-how-to-identify-and-combat-consequence-design.md


## Topics
http://localhost:1313/topics/v1/json/


### Issues

"content" is a ghost topic being generated.