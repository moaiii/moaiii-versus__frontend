# Create mobile app links 
mkdir ./mobile/node_modules/@versus-store
touch ./mobile/node_modules/@versus-store/index.js
echo "import store from '../../../common/store';" >> ./mobile/node_modules/@versus-store/index.js
echo "export default store;" >> ./mobile/node_modules/@versus-store/index.js

mkdir ./mobile/node_modules/@versus-api
touch ./mobile/node_modules/@versus-api/index.js
echo "import api from '../../../common/api/index';" >> ./mobile/node_modules/@versus-api/index.js
echo "export default api;" >> ./mobile/node_modules/@versus-api/index.js

mkdir ./mobile/node_modules/@versus-actions
touch ./mobile/node_modules/@versus-actions/index.js
echo "import actions from '../../../common/actions/index';" >> ./mobile/node_modules/@versus-actions/index.js
echo "export default actions;" >> ./mobile/node_modules/@versus-actions/index.js

mkdir ./web/node_modules/@versus-store
touch ./web/node_modules/@versus-store/index.js
echo "import store from '../../../common/store';" >> ./web/node_modules/@versus-store/index.js
echo "export default store;" >> ./web/node_modules/@versus-store/index.js

mkdir ./web/node_modules/@versus-api
touch ./web/node_modules/@versus-api/index.js
echo "import api from '../../../common/api/index';" >> ./web/node_modules/@versus-api/index.js
echo "export default api;" >> ./web/node_modules/@versus-api/index.js

mkdir ./web/node_modules/@versus-actions
touch ./web/node_modules/@versus-actions/index.js
echo "import actions from '../../../common/actions/index';" >> ./web/node_modules/@versus-actions/index.js
echo "export default actions;" >> ./web/node_modules/@versus-actions/index.js
