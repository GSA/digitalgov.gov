# Migration Endpoints


- mocks/ are expected output for migration, what we want
- endpoints/ is the actual output for each endpoint for testing/comparison
- 

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

## notes

1. fix invalid json
2. remove duplicate keys for each type
3. add missing fields for completeness for each type
4. add content to json output
5. create endpoints for short-post

| hugo        | drupal      | json                       | valid | setup                                                |
| ----------- | ----------- | -------------------------- | ----- | ---------------------------------------------------- |
| authors     | authors     | authors/v1/json            | yes   |                                                      |
| news        | news        | default/list.json.json     | no    | fix front matter escaping, dupe topics               |
| news        | short posts | short-posts.json.json      | yes   | source and source_url                                |
| events      | events      | events/list.json.json      | yes   |                                                      |
| communities | communities | communities/list.json.json | no    |                                                      |
| guides      | guides      | default/list.json.json     | yes   | need to include children files, added missing fields |
| resources   | resources   | default/list.json.json     | yes   | duplicate keys                                       |
| topics      | topics      | topics/v1/json             | no    |                                                      |
| sources     | sources     | sources/list.json.json     | yes   |                                                      |
| services    | services    | default/list.json.json     | yes   |                                                      |
  

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

Write a loop to get all nested guides for HCD, etc

### Issues


## Events
http://localhost:1313/events/index.json


### Issues
- Should we display blank fields like kicker with empty string or do not include?
