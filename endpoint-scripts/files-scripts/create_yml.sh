#!/bin/bash

input_file="missing-yml.txt"  # Change this to your actual text file
output_dir="endpoint-scripts/files-scripts/yml"  # Change to your desired output directory

# Ensure the input file exists
if [[ ! -f "$input_file" ]]; then
  echo "Error: Input file '$input_file' not found!"
  exit 1
fi

# Ensure the output directory exists
mkdir -p "$output_dir"

# Read file line by line, ensuring correct field separation
while IFS=$'\t' read -r uid format date; do
  # Skip header row
  if [[ "$uid" == "UID" && "$format" == "Format" && "$date" == "Date" ]]; then
    continue
  fi

  # Ensure fields are not empty (prevents blank lines from causing errors)
  if [[ -z "$uid" || -z "$format" || -z "$date" ]]; then
    echo "Skipping invalid row: $uid, $format, $date"
    continue
  fi

  # Define output filename in the correct directory
  output_file="${output_dir}/${uid}.yml"

  # Create YAML file
  cat > "$output_file" <<EOL
# https://s3.amazonaws.com/digitalgov/static/${uid}.${format}
# File shortcode: {{< asset-static file="${uid}.${format}" label="" >}}

date     :  ${date} -0400
uid      :  ${uid}
format   :  ${format}
EOL

  # Print confirmation message
  echo "Created: $output_file"

done < "$input_file"

