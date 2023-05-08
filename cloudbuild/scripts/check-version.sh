
GH_USER=$1
GH_REPO=$2

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | cut -c 2- )

echo ${GH_USER}/${GH_REPO}

EXISTS=$(/usr/bin/gh.bash release view v${PACKAGE_VERSION} -R ${GH_USER}/${GH_REPO})

if [[ -n $EXISTS ]]; then
    echo "Release with version v$PACKAGE_VERSION already exists"
    exit 1
fi