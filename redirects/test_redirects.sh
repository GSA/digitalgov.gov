awk '{print $1}' redirects/slugs_sort.txt | while IFS= read -r file; do
    echo "$url, $(curl -s -o /dev/null -w '%{http_code}' "https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-redirect-2012-content${url}")" >> redirects/test_redirects.txt
done