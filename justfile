# Run the development server for the website
install:
  npm install --prefix iig-fusion

run: install
  npm run dev --prefix iig-fusion

ci:
  npm ci --prefix iig-fusion

build-site:
  npm run build --prefix iig-fusion

build: install build-site

build-ci: ci build-site

work:
  echo "Calm down!"
