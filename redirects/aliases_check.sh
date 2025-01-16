#!/bin/bash

# print all instances of the slug being used in content to review
# filepath, line-#, content copy with reference

output_file="redirects/aliases_check.txt"
> redirects/aliases_check.txt

awk '{print $1}' redirects/slugs_sort.txt | while IFS= read -r file; do
#   rg -n "$file" content | choose -f ":" 0 1 2: >> redirects/aliases_check.txt
  rg -n "$file" content | choose -f ":" 0 1 >> "$output_file"
done


column -t -s ' ' "$output_file" > "${output_file}.tmp" && mv "${output_file}.tmp" "$output_file"
