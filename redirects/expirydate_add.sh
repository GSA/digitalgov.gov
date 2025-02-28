awk -F' ' '{print $2}' redirects/filepaths.txt | while IFS= read -r file; do
  gsed -i'' -e '0,/---/{n;}; /^---$/ i expirydate: 2025-01-01' "${file}"
done