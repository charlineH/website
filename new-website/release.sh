#!/bin/bash -e

emptyLine() {
  echo "" >> CHANGELOG.md
}

OLD_TAG=$(git describe --tags --abbrev=0)
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
VERSION="${BRANCH_NAME#*/}"
echo "Version: ${VERSION}"

# Add changes to CHANGELOG.md file.
emptyLine
echo "### ${VERSION}" >> CHANGELOG.md
emptyLine
git log --oneline --no-merges --pretty=format:"- %s" "${OLD_TAG}".."${BRANCH_NAME}" >> CHANGELOG.md
emptyLine


# Update package.json version
npm version "${VERSION}" --no-git-tag-version --no-commit-hooks

# Add changes to index and create release commit
git add .
git commit -m ":bookmark: Release ${VERSION}"

# Create tag with release version
git tag "metro-${VERSION}"


# Push release branch with tag
git push -u origin "${BRANCH_NAME}" --tags
