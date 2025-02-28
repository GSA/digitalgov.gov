#!/bin/bash

# print all instances of the slug being used in content to review
# filepath, line-#, content copy with reference
input_file="endpoint-scripts/content-files.txt"
output_file="endpoint-scripts/filenames-slug.txt"
> "$output_file"

awk '{print $0}' "$input_file" | while IFS= read -r file; do
  gsed -n 's/^slug:\s*"\?\([^"]*\)"\?/\1/p' "$file" | awk -v f="$file" '{print f ", " $0}' >> "$output_file"
done
