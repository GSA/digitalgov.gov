#!/bin/bash

# print all instances of the slug being used in content to review
# filepath, line-#, content copy with reference

output_file="redirects/aliases_check.txt"
> "$output_file"

# awk '{print $1}' redirects/slugs_sort.txt | while IFS= read -r file; do
#   rg -n "$file" content | choose -f ":" 0 1 >> "$output_file"
# done

awk '{print $1}' redirects/slugs_sort.txt | while IFS= read -r file; do
  rg -n "$file" content | choose -f ":" 0 1 | while IFS= read -r line; do
    echo "$file: $line" >> "$output_file"
  done
done



column -t -s ' ' "$output_file" > "${output_file}.tmp" && mv "${output_file}.tmp" "$output_file"
