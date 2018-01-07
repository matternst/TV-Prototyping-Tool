


//VALUES YOU WILL NEED TO UPDATE
var $apiKeyValue = 'keyAcBf5mNTlUfeNF';
var $apiBaseValue = 'appBqkMOoXuiQjKFo';
var $apiTableName = 'Table 1';

var Airtable = require('airtable');
var base = new Airtable({ apiKey: $apiKeyValue }).base($apiBaseValue);



//** 
//SELECT PROJECT
//** 

var $testProjectName = 'crackle';  //NEEDS TO BE DYNAMIC BASED ON PROJECT SELECTED

//Code to come




//** 
//DISPlAY SCREENS
//** 

//Set the  filterbyFormula as a variable 
var filter = '({project_name} = "' + $testProjectName + '" )';

base($apiTableName).select({
    filterByFormula: filter, //Filter the results by project
    sort: [ //Sort the results by position 
        {field: 'position', direction: 'asc'}
    ]
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {

        var $screenName = record.get('screen_name');

        var $screenInfo = $('<div>');

        $screenInfo.append('<input value="' + $screenName + '"  id="' + "screen-id-" + record.get('ID') + '" class="screen-name" >');
        
        $screenInfo.append('<button type="button" data-screen-id="' + record.getId() + '" onclick="screenUpdate(this)">Save</button>');

        $screenInfo.append($('<h4>').text(record.get('project_name')));
        $screenInfo.append($('<div>').text(record.get('screen_name')));
        $screenInfo.append($('<div>').text(record.get('position')));
        $screenInfo.append($('<div>').text(record.get('up-direction')));
        $screenInfo.append($('<div>').text(record.get('down-direction')));
        $screenInfo.append($('<hr>'));
        // var x = $('<button>').text('Delete').click(function() {
        //     deleteArtist(record);
        // });
        // $screenInfo.append(x)
        $screenInfo.attr('id', record.getId());

        $('#screens').append($screenInfo);

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});




//** 
//DISPLAY SCREEN
//** 

//Code to come







//** 
//UPDATE SCREEN DATA
//** 

function screenUpdate(e) {

    var $dataScreenId = e.getAttribute("data-screen-id");    
    var $newScreenName = $("#" + $dataScreenId).find( "input.screen-name" ).val();

    base($apiTableName).update($dataScreenId, {
        "screen_name": $newScreenName

    }, function(err, record) {
        if (err) { console.error(err); return; }
    });
}






//** 
//DELETE SCREEN
//** 

//Code to come







