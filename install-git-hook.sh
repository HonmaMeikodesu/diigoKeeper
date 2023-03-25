#!/bin/sh

echo "#!/bin/sh

npm run lint&&npm run prettier&&npm run test" > .git/hooks/pre-commit