FOLDER_BASE_PATH="C:\Users\PARTHA\Desktop\mongodump_data"

declare -A collection0=(
    [collName]='movies'
    [SOURCE_DATABASE]='sample_airbnb'
    [DEST_DATABASE]='sample_airbnb-prod'
)
declare -A collection1=(
    [collName]='users'
    [SOURCE_DATABASE]='sample_airbnb'
    [DEST_DATABASE]='sample_airbnb-prod'
)

declare -n collection
for collection in ${!collection@}; do
    cd "$FOLDER_BASE_PATH"

    # Create Dump
    echo "creating dump for ${collection[collName]} from DB ${collection[SOURCE_DATABASE]}"
    mongodump --uri="mongodb+srv://admin:@cluster0.b6w35.mongodb.net/${collection[SOURCE_DATABASE]}" --collection=${collection[collName]} --out="${collection[collName]}.bson"
    echo "created dump for ${collection[collName]} from DB ${collection[SOURCE_DATABASE]}"

    cd "$FOLDER_BASE_PATH"/"${collection[collName]}.bson"/"${collection[SOURCE_DATABASE]}"

    # Restore Dump
    echo "Restoring data from ${collection[collName]}"
    mongorestore --uri="mongodb+srv://bpadmin:@blueprintapp.atmai.mongodb.net/${collection[DEST_DATABASE]}"  --drop "${collection[collName]}.bson"
    echo "Restored data from ${collection[collName]} to DB ${collection[DEST_DATABASE]}"
done