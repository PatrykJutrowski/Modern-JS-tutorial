
function deleteCat(catId){
    return database.delete('cats', catId)
}


function deleteButton(e){
    const catId = e.target.data['cat-id']
    deleteCat(catId)
        .then(()=> removeItemElementFromPage(catId))
        .catch(err=>
            showMessageDialog(
                'item' + getCatname(catId) + ' was not detected '
            ))
}
//handling an error
