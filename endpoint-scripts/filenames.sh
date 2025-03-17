# for file in "${files[@]}"; do
#   rg --fixed-strings --regexp "title: $file" content/news | choose 0 -f ":"
# done

#!/bin/bash

# Define the directory to search
directory="content/news"

# Define the pattern to match the front matter fields
pattern='^---\n(.*\n)*?date: ([^\n]+)\n(.*\n)*?title: ([^\n]+)\n(.*\n)*?---'

# Use rg to find the front matter and extract the date, title, and filepath
rg --type=md --multiline --pcre2 --replace 'File: $`$\nDate: $2\nTitle: $4' --regexp "$pattern" "$directory" | grep -v '^---' | grep -v '^$'
