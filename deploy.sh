aws s3 sync . s3://carltonom --acl public-read --exclude ".git*"
open http://carltonom.s3-website-us-west-2.amazonaws.com/
