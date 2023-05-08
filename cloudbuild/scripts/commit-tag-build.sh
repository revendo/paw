
GH_USER=$1
GH_REPO=$2
GH_SECRET=$3
GH_USER_EMAIL=$4

# Version key/value should be on his own line
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | cut -c 2- )

if [ -f "token.txt" ]; then
  GH_TOKEN=$(cat token.txt)
else
  echo "No Github token found"
  exit 1
fi

git config --global user.name "${GH_USER}"
git config --global user.email "${GH_USER_EMAIL}"
git checkout -b v${PACKAGE_VERSION}
git add -A
git commit -m "Build for v${PACKAGE_VERSION}" 
git push https://${GH_TOKEN}@github.com/${GH_USER}/${GH_REPO}.git

/usr/bin/gh.bash release create v${PACKAGE_VERSION} --target v${PACKAGE_VERSION} -R ${GH_USER}/${GH_REPO}