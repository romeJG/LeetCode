# Read from the file file.txt and output all valid phone numbers to stdout.
p1='\([0-9][0-9][0-9]\)\ [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'
p2='[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'

while read line; do
  case "$line" in
  $p1 | $p2) echo "$line" ;;
  esac
done <file.txt

# This is not mine i just converted a js code xP