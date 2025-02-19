input_file="redirects/date_for_files.txt"
> "$input_file"

# awk '{print $1}' redirects/date_files_to_get.txt | while IFS= read -r file; do
#   sed -n '/^date:/p' "${file}" | sed -E 's/^date: ([0-9]{4}-[0-9]{2}-[0-9]{2}).*/\1/' >> "$input_file"
# done

awk '{print $1}' redirects/date_files_to_get.txt | while IFS= read -r file; do
  date=$(gsed -n '/^date:/p' "${file}" | gsed -E "s/^date: ([0-9]{4}-[0-9]{2}-[0-9]{2}).*/\1/")
  if [ -z "$date" ]; then
    echo "${file}: NO DATE" >> "$input_file"
  else
    echo "${file}: ${date}" >> "$input_file"
  fi
done



