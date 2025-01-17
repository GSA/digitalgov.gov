#!/bin/bash

# Input file containing slugs
input_file="redirects/slugs.txt"
sort_file="redirects/slugs_sort.txt"
clean_file="redirects/slugs_clean.txt"

> "$sort_file"
> "$clean_file"

# sort by date
cat "$input_file" | sort > "$sort_file"

# Check if the input file exists
if [[ ! -f "$sort_file" ]]; then
  echo "Error: File $input_file does not exist."
  exit 1
fi

# Read each line from redirects/slugs.txt
while IFS= read -r slug; do
  # Skip empty lines
  if [[ -z "$slug" ]]; then
    continue
  fi

  # remove / and replace with hyphens for searching
  echo "$slug" | sed 's/^\/\(.*\)\/$/\1/; s/\//-/g' >> "$clean_file"

done < "$sort_file"