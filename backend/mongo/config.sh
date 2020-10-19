echo '----------------------'
echo '----------------------'
echo '----------------------'
echo '----------------------'
echo 'CREANDO USUARIO PARA MONGO...'
echo '----------------------'
echo '----------------------'
echo '----------------------'
echo '----------------------'

mongo database \
    --host localhost \
    --port 27017 \
    --authenticationDatabase admin \
    --eval "db.createUser({user:'${MONGO_INITDB_ROOT_USERNAME}', pwd:'${MONGO_INITDB_ROOT_PASSWORD}', roles:[{role:'dbOwner', db:'${MONGO_DB_NAME}'}]});"

echo '----------------------'
echo '----------------------'
echo '----------------------'
echo '----------------------'
echo '...USUARIO CREADO EXITOSAMENTE'
echo '----------------------'
echo '----------------------'
echo '----------------------'
echo '----------------------'