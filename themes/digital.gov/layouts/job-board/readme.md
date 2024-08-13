## Communities of Practice Job Board 


The Communities of Practice (CoP) Job Board aims to be a public resource for CoP related positions in the government. All job posting data comes from the USAJOBS.

## How to contribute a job to the job board 
- Submit a job posting through a related [Communities of Practice listserv](https://digital.gov/communities/), or email [digitalgov@gsa.gov](mailto:digitalgov@gsa.gov)


## Development Guide

### Job Board Components

| Component                                                                                    | Usage                                                                     |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Frontmatter `content/job-board/_index.md` | Hugo markdown page |
|List page `themes/digital.gov/layouts/job-board/list.html` | Edit this document to change formatting and logic of job board |
| SCSS styling `themes/digital.gov/src/scss/new/_card-job.scss`  | Card styling for each job post |
|YAML file `data/job_board.yml` | Edit this document to update job postings on the job board   |
|Job Board Dashboard | This document (not on GitHub) is used by content managers to manage job postings |


### List.html features
- This file pulls job entries from `job_board.yml` and formats each job posting in a `card-job` component. 
- If a job posting has an affiliated CoP(s), it will add the CoP tag at the bottom of the posting, with the CoP's affiliated color. 
- If a job listing expires, it will be taken down from the job board automatically
- If there are no job postings, a note will be made on the page so it is not completely empty


### If you want to make changes
- Add/remove CoP topics: add/remove from the dictionary in `list.html` , `card-job.scss`, and the Job Board Dashboard.
- Change the process of users submitting job posts: aCoP members currently submit a job post by sending it in CoP listservs. If/when this process gets moved from CoP listservs to a submission form, add a link to the form at the top of `list.html`


## How to add a job to the job board
- Follow the instructions in Job Board Dashboard to produce a YAML-formatted list of job postings
- Paste the list into `job_board.yml`. Remove quotation marks around pasted list
- Review YML file to make sure that there are no formatting errors. 
    - This can be done on a YAML validator online. Common errors include incorrect indendation, colons (:) in the description section. If the YAML file is not formatted correctly, the job board will break
- Make pull request to update yml file


## For more information of how to use, edit, and manage the Job Board
- Please refer to internal documentation "Job Board Technical Documentation" and "How to Manage the CoP Job Board"


