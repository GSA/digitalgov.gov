# awk '{print $1}' redirects/slugs_sort.txt | while IFS= read -r file; do
#     echo "$url, $(curl -s -o /dev/null -w '%{http_code}' "https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-redirect-2012-content${url}")" >> redirects/test_redirects.txt
# done

input_file="redirects/slugs_sort.txt"
output_file="redirects/test_redirects.txt"
cloud_pages="https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-redirect-2015-content"

> redirects/test_redirects.txt

awk '{print $0}' "$input_file" | while IFS= read -r slug; do
    # Print the slug before making the curl request
    echo "$slug" >> "$output_file"
    # Process the HTTP response
    curl -i -s "$cloud_pages""$slug" | awk '
    BEGIN {code_printed=0}
    /^HTTP\// {
        if (code_printed==0) {
            print $2; code_printed=1
        }
    }
    /^[[:space:]]*$/ {body=1; next}
    body {print}
    ' >> "$output_file"
done
