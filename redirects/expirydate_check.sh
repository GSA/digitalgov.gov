output_file="redirects/expirydate_check.txt"
> "$output_file"

awk -F' ' '{print $2}' redirects/filepaths.txt | while IFS= read -r file; do
  # Check if the file exists
  if [[ -f "$file" ]]; then
    # Use awk to process the front matter
    if awk '
      BEGIN { in_front_matter = 0 }
      /^---$/ { in_front_matter++ }
      in_front_matter == 1 && /^expirydate:/ { found = 1 }
      in_front_matter == 2 { exit }
      END { exit !found }
    ' "$file"; then
      echo "$file TRUE" >> "$output_file"
    else
      echo "$file FALSE" >> "$output_file"
    fi
  else
    echo "$file NO FILE"
  fi
done

column -t -s ' ' "$output_file" > "${output_file}.tmp" && mv "${output_file}.tmp" "$output_file"