#!/bin/bash

# Directory containing files (modify as needed)
input_dir="endpoint-scripts/files-scripts/yml"

# Loop through all files in the directory
for file in "$input_dir"/*; do
  # Extract filename and convert to lowercase
  lowercase_file="$(echo "$file" | gsed 's|.*/||' | tr '[:upper:]' '[:lower:]')"

  # Check if the filename is already lowercase
  if [[ "$file" != "$input_dir/$lowercase_file" ]]; then
    mv "$file" "$input_dir/$lowercase_file"
    echo "Renamed: $file -> $input_dir/$lowercase_file"
  fi
done
