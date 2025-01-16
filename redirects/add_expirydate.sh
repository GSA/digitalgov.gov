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
      echo "$file: has expirydate"
    else
      echo "$file: false"
    fi
  else
    echo "$file: file does not exist"
  fi

  # add expirydate
  gsed -i'' -e '0,/---/{n;}; /^---$/ i expirydate: 2025-01-01' "${file}"
done







# ---
# slug: api-design-and-documentation
# date: 2013-03-12 12:49:20 -0400
# title: API Design and Documentation
# summary: Design At their core, developers want APIs for very straightforward, pragmatic ends. You should always design your APIs and document them with the goal of making it easier for developers to use them. Doing so results in greater adoption and a healthier, more successful API. The least efficient way to support developers would be to
# authors:
#   - gray-brooks
# topics:
#   - application-programming-interface
#   - software-engineering
# expirydate: 2025-01-01
# ---

# ## Content goes here