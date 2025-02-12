## endpoint-scripts

This is folder contains mocks, final output json for each content types and scripts.

- `mocks/` are expected output for migration, ideal end state for the endpoint
- `endpoints/` is the actual output for each endpoint for testing/comparison
- run locally or on federalist and visit the below urls for each content type for the json endpoint 


| content      | json serializer                        | endpoint                                     | notes |
| ------------ | -------------------------------------- | -------------------------------------------- | ----- |
| authors      | layouts/shortcodes/api-authors.html    | http://localhost:1313/authors/v1/json/       | valid |
| news         | layouts/news/list.json.json            | http://localhost:1313/news/index.json        | valid |
| short post   | layouts/shortcodes/api-shortposts.html | http://localhost:1313/short-posts/v1/json/   | valid |
| events       | layouts/events/list.json.json          | http://localhost:1313/events/index.json      | valid |
| communities  | communities/list.json.json             | http://localhost:1313/communities/index.json | valid |
| guides       | default/list.json.json                 |                                              | valid |
| resources    | layouts/resources/list.json.json       | http://localhost:1313/resources/index.json   | valid |
| topics       | layouts/topics/list.json.json          | http://localhost:1313/topics/v1/json/        | valid |
| sources      | sources/list.json.json                 | http://localhost:1313/sources/index.json     | valid |
| ~~services~~ | ~~default/list.json.json~~             | ~~yes~~                                      |       |
| redirects    | default/list.json.json                 |                                              | wip   |
  


## authors

| endpoint                               | serializer                           |
| -------------------------------------- | ------------------------------------ |
| http://localhost:1313/authors/v1/json/ | /layouts/shortcodes/api-authors.html |


### checklist

- [x] match json fields to drupal field names in development
- [x] consistent field names in data model document
- [x] valid json?
	- [x] escaping quotes?
	- [x] returns valid
- [x] mock file complete
- [x] json response complete
- [x] capture content changes that will need to be addressed post migration 
- [ ] resolve questions on field names
	- [ ] how will `display_name` populate the title?
	- [ ] ?

### issues

- Replace single quotes to double quotes for "Abby" to 'Abby' for content/authors/abigail-abby-bowman/_index.md
- 



## communities

| endpoint                                     | serializer                         |
| -------------------------------------------- | ---------------------------------- |
| http://localhost:1313/communities/index.json | layouts/communities/list.json.json |


### checklist

- [x] match json fields to drupal field names in development
- [x] consistent field names in data model document
- [x] valid json?
	- [x] escaping quotes?
	- [x] returns valid
- [x] mock file complete
- [x] json response complete
- [x] capture content changes that will need to be addressed post migration 
- [x] resolve questions on field names


### issues

Remove listserv platform frontmatter

- [ ] content/communities/artificial-intelligence.md
- [ ] content/communities/blockchain.md
- [ ] content/communities/results-oriented-accountability-for-grants.md



## events

| endpoint                                | serializer                    |
| --------------------------------------- | ----------------------------- |
| http://localhost:1313/events/index.json | layouts/events/list.json.json |


### checklist

- [x] match json fields to drupal field names in development
- [x] consistent field names in data model document
- [x] valid json?
	- [x] escaping quotes?
	- [x] returns valid
- [x] mock file complete
- [x] json response complete
- [ ] capture content changes that will need to be addressed post migration 
- [ ] resolve questions on field names
	- [ ] field_event_cop
	- [ ] venue field has sub-fields
	- [ ] youtube_title is missing



### issues





## guides

| endpoint                                | serializer                    |
| --------------------------------------- | ----------------------------- |
| http://localhost:1313/events/index.json | layouts/events/list.json.json |


### checklist

- [ ] match json fields to drupal field names in development
- [ ] consistent field names in data model document
- [ ] valid json?
	- [ ] escaping quotes?
	- [ ] returns valid
- [ ] mock file complete
- [ ] json response complete
- [ ] capture content changes that will need to be addressed post migration 
- [ ] resolve questions on field names
	- [ ] 


### issues

- [ ] not reading guide root index files for some reason
- [ ] add `field_guide_nav_title` to front matter for each guide
- [ ] landing page?
- [ ] navigation page?




## news

| endpoint                              | serializer                  |
| ------------------------------------- | --------------------------- |
| http://localhost:1313/news/index.json | layouts/news/list.json.json |


### checklist

- [x] match json fields to drupal field names in development
- [x] consistent field names in data model document
- [x] valid json?
	- [x] escaping quotes?
	- [x] returns valid
- [x] mock file complete
- [x] json response complete
- [x] capture content changes that will need to be addressed post migration 
- [x] resolve questions on field names


### issues


## resources

| endpoint                                   | serializer                       |
| ------------------------------------------ | -------------------------------- |
| http://localhost:1313/resources/index.json | layouts/resources/list.json.json |


### checklist

- [x] match json fields to drupal field names in development
- [x] consistent field names in data model document
- [x] valid json?
	- [x] escaping quotes?
	- [x] returns valid
- [x] mock file complete
- [x] json response complete
- [x] capture content changes that will need to be addressed post migration 
- [ ] resolve questions on field names


### issues

- [ ] missing field_authors in drupal


## sources

| endpoint                                 | serializer                     |
| ---------------------------------------- | ------------------------------ |
| http://localhost:1313/sources/index.json | layouts/sources/list.json.json |


### checklist

- [x] match json fields to drupal field names in development
- [x] consistent field names in data model document
- [x] valid json?
	- [x] escaping quotes?
	- [x] returns valid
- [x] mock file complete
- [x] json response complete
- [x] capture content changes that will need to be addressed post migration 
- [ ] resolve questions on field names


### issues

- [ ] missing drupal field names

## topics type

| endpoint                             | serializer                    |
| ------------------------------------ | ----------------------------- |
| http://localhost:1313/topics/v1/json | layouts/events/list.json.json |


### checklist

- [x] match json fields to drupal field names in development
- [x] consistent field names in data model document
- [x] valid json?
	- [x] escaping quotes?
	- [x] returns valid
- [x] mock file complete
- [x] json response complete
- [x] capture content changes that will need to be addressed post migration 
- [ ] resolve questions on field names


### issues

- how will we ingest featured communities, featured links, featured resources, and legislation