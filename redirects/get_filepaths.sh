# read a list slugs, find the file and output title, date and filepath

#!/bin/bash


# Input file containing slugs
input_file="redirects/slugs_clean.txt"
output_file="redirects/filepaths.txt"

> "$output_file"

# Base directory to search within
search_dir="content"

# Check if the input file exists
if [[ ! -f "$input_file" ]]; then
  echo "Error: File $input_file does not exist."
  exit 1
fi

> "$output_file"

while IFS= read -r slug; do
  # Use find to search for matching files
  found_files=$(find "$search_dir" -type f -name "*$slug*" 2>/dev/null)

  if [[ -n "$found_files" ]]; then
    # If matches are found, write each match with the slug
    while IFS= read -r filepath; do
      echo "$slug,$filepath" >> "$output_file"
    done <<< "$found_files"
  else
    # If no matches are found, write "No file found"
    echo "$slug,No file found" >> "$output_file"
  fi
done < "$input_file"

column -t -s ',' "$output_file" > "${output_file}.tmp" && mv "${output_file}.tmp" "$output_file"