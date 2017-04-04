angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchSDB   = '';     // set the default search/filter term
  
  // 
  $scope.council = [
 {
   name: "Aberdeen City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Aberdeenshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Adur District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Allerdale Borough Council",
   NOSR: 3562,
   NODR: "N/A",
   NOFR: 341
 },
 {
   name: "Amber Valley Borough Council",
   NOSR: 3085,
   NODR: 123,
   NOFR: 23
 },
 {
   name: "Angus Council",
   NOSR: 4910,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Antrim and Newtownabbey   Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Antrim Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Ards Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Argyll & Bute   Council",
   NOSR: 6517,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Armagh",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Arun District Council",
   NOSR: 2758,
   NODR: "N/A",
   NOFR: 198
 },
 {
   name: "Ashfield District Council",
   NOSR: 3578,
   NODR: 232,
   NOFR: 12
 },
 {
   name: "Ashford Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Aylesbury Vale District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Babergh District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Ballymena",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Ballymoney Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Banbridge District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Barnsley Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Barrow-in-Furness Borough   Council",
   NOSR: 569,
   NODR: 54,
   NOFR: 5
 },
 {
   name: "Basildon District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Basingstoke & Deane   Borough Council",
   NOSR: 2715,
   NODR: "N/A",
   NOFR: 162
 },
 {
   name: "Bassetlaw District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Bath & North East   Somerset Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Bedford Borough Council",
   NOSR: 8171,
   NODR: "N/A",
   NOFR: 1649
 },
 {
   name: "Belfast City Council",
   NOSR: 3915,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Birmingham City Council",
   NOSR: 10821,
   NODR: "N/A",
   NOFR: 1526
 },
 {
   name: "Blaby District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Blackburn with Darwen Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Blackpool Council",
   NOSR: 6654,
   NODR: 447,
   NOFR: 1862
 },
 {
   name: "Blaenau Gwent County Borough",
   NOSR: 802,
   NODR: 13,
   NOFR: 126
 },
 {
   name: "Bolsover District Council",
   NOSR: 2875,
   NODR: "N/A",
   NOFR: 7
 },
 {
   name: "Bolton Metropolitan Borough   Council",
   NOSR: 7462,
   NODR: "N/A",
   NOFR: 576
 },
 {
   name: "Boston Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Bournemouth Borough Council",
   NOSR: 5760,
   NODR: 307,
   NOFR: 403
 },
 {
   name: "Bracknell Forest Council",
   NOSR: 1694,
   NODR: 110,
   NOFR: 254
 },
 {
   name: "Bradford Metropolitan Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Braintree District Council",
   NOSR: 3452,
   NODR: 758,
   NOFR: 91
 },
 {
   name: "Breckland District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Brentwood Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Bridgend County Borough   Council",
   NOSR: 5197,
   NODR: 146,
   NOFR: 325
 },
 {
   name: "Brighton and Hove City Council",
   NOSR: 8541,
   NODR: 592,
   NOFR: "N/A"
 },
 {
   name: "Bristol City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Broadland District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Bromsgrove District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Broxbourne Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Broxtowe Borough Council",
   NOSR: 3347,
   NODR: "N/A",
   NOFR: 107
 },
 {
   name: "Buckinghamshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Burnley Borough Council",
   NOSR: 3160,
   NODR: "N/A",
   NOFR: 847
 },
 {
   name: "Bury Metropolitan Borough   Council",
   NOSR: 5534,
   NODR: "N/A",
   NOFR: 778
 },
 {
   name: "Caerphilly County Borough   Council",
   NOSR: 5981,
   NODR: 754,
   NOFR: 1221
 },
 {
   name: "Calderdale",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cambridge City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cambridgeshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cannock Chase District Council",
   NOSR: 3715,
   NODR: "N/A",
   NOFR: 415
 },
 {
   name: "Canterbury City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cardiff Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Carlisle City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Carmarthenshire County Council",
   NOSR: 6205,
   NODR: 1503,
   NOFR: 423
 },
 {
   name: "Carrickfergus Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Castle Point",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Castlereagh Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Central Bedfordshire Council",
   NOSR: 6183,
   NODR: 925,
   NOFR: 931
 },
 {
   name: "Ceredigion County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Charnwood Borough Council",
   NOSR: 3214,
   NODR: 187,
   NOFR: 62
 },
 {
   name: "Chelmsford Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cheltenham Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cherwell District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cheshire East",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cheshire West and Chester",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Chesterfield Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Chichester District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Chiltern District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Chorley Borough Council",
   NOSR: 3473,
   NODR: "N/A",
   NOFR: 85
 },
 {
   name: "Christchurch Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "City & County of Swansea",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "City of Edinburgh",
   NOSR: 2148,
   NODR: 343,
   NOFR: 1199
 },
 {
   name: "City of Glasgow",
   NOSR: 15757,
   NODR: 1172,
   NOFR: "N/A"
 },
 {
   name: "City of London Corporation",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "City of Westminster",
   NOSR: 11362,
   NODR: "N/A",
   NOFR: 1437
 },
 {
   name: "City of York",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Clackmannanshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Colchester Borough Council",
   NOSR: 3746,
   NODR: "N/A",
   NOFR: 138
 },
 {
   name: "Coleraine Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Comhairle nan Eilean Siar   (Western Isles Council)",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Conwy County Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cookstown District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Copeland Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Corby Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Cornwall Council",
   NOSR: 10452,
   NODR: 1513,
   NOFR: 1714
 },
 {
   name: "Cotswold District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Council of the Isles of Scilly",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Coventry City Council",
   NOSR: 1370,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Craigavon Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Craven District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Crawley Borough Council",
   NOSR: 3738,
   NODR: "N/A",
   NOFR: 321
 },
 {
   name: "Cumbria County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Dacorum Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Darlington Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Dartford Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Daventry District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Denbighshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Derby City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Derbyshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Derbyshire Dales",
   NOSR: 3599,
   NODR: "N/A",
   NOFR: 219
 },
 {
   name: "Derry (City of Londonderry)",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Devon County Council",
   NOSR: 7778,
   NODR: 994,
   NOFR: 1140
 },
 {
   name: "Doncaster Metropolitan Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Dorset County Council",
   NOSR: 4035,
   NODR: 346,
   NOFR: 595
 },
 {
   name: "Dover District Council",
   NOSR: 5852,
   NODR: 105,
   NOFR: 304
 },
 {
   name: "Down District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Dudley Metropolitan Borough",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Dumfries and Galloway Council",
   NOSR: 6148,
   NODR: 674,
   NOFR: 392
 },
 {
   name: "Dundee City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Dungannon District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Durham County Council",
   NOSR: 7150,
   NODR: 316,
   NOFR: 1833
 },
 {
   name: "East Ayrshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Cambridgeshire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Devon",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Dorset District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Dunbartonshire Council",
   NOSR: 2244,
   NODR: 201,
   NOFR: 509
 },
 {
   name: "East Hampshire District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Hertfordshire",
   NOSR: 3370,
   NODR: "N/A",
   NOFR: 361
 },
 {
   name: "East Lindsey District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Lothian Council",
   NOSR: 6891,
   NODR: 902,
   NOFR: 883
 },
 {
   name: "East Northamptonshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Renfrewshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Riding of Yorkshire   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Staffordshire Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "East Sussex County Council",
   NOSR: 6358,
   NODR: "N/A",
   NOFR: 449
 },
 {
   name: "Eastbourne Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Eastleigh Borough Council",
   NOSR: 3367,
   NODR: 91,
   NOFR: 541
 },
 {
   name: "Eden District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Elmbridge Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Epping Forest District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Epsom & Ewell Borough   Council",
   NOSR: 3321,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Erewash Borough",
   NOSR: 3303,
   NODR: "N/A",
   NOFR: 51
 },
 {
   name: "Essex County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Exeter City",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Falkirk District Council",
   NOSR: 4399,
   NODR: 431,
   NOFR: 348
 },
 {
   name: "Fareham Borough Council",
   NOSR: 2934,
   NODR: 19,
   NOFR: 538
 },
 {
   name: "Fenland District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Fermanagh and Omagh District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Fermanagh Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Fife Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Flintshire County Council",
   NOSR: 5529,
   NODR: "N/A",
   NOFR: 963
 },
 {
   name: "Forest Heath District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Forest of Dean District   Council",
   NOSR: 3460,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Fylde Borough Council",
   NOSR: 3340,
   NODR: 28,
   NOFR: "N/A"
 },
 {
   name: "Gateshead Metropolitan Borough   Council",
   NOSR: 6228,
   NODR: "N/A",
   NOFR: 348
 },
     {
   name: "Welhat council",
   NOSR: 3375,
   NODR: 183,
   NOFR: 242
 },
 {
   name: "Gedling Borough Council",
   NOSR: 3509,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Gloucester City Council",
   NOSR: 3737,
   NODR: 355,
   NOFR: 873
 },
 {
   name: "Gloucestershire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Gosport Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Gravesham Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Great Yarmouth Borough Council",
   NOSR: 3983,
   NODR: "N/A",
   NOFR: 578
 },
 {
   name: "Greater London Authority",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Guildford Borough Council",
   NOSR: 3286,
   NOFR: 502
 },
 {
   name: "Gwynedd Council",
   NOSR: 4322,
   NODR: 311,
   NOFR: "N/A"
 },
 {
   name: "Halton Borough Council",
   NOSR: 5272,
   NODR: 604,
   NOFR: 696
 },
 {
   name: "Hambleton",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Hampshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Harborough District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Harlow Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Harrogate Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Hart District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Hartlepool Borough Council",
   NOSR: 5733,
   NODR: "N/A",
   NOFR: 1120
 },
 {
   name: "Hastings Borough Council",
   NOSR: 3996,
   NODR: 266,
   NOFR: 280
 },
 {
   name: "Havant District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Herefordshire Council",
   NOSR: 6187,
   NODR: 427,
   NOFR: 687
 },
 {
   name: "Hertfordshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Hertsmere Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "High Peak Borough",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Highland Council",
   NOSR: 7760,
   NODR: "N/A",
   NOFR: 1461
 },
 {
   name: "Hinckley & Bosworth   District Council",
   NOSR: 2695,
   NODR: 41,
   NOFR: 13
 },
 {
   name: "Horsham District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Hull City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Huntingdonshire District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Hyndburn Borough Council",
   NOSR: 3459,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Inverclyde Council",
   NOSR: 1534,
   NODR: 118,
   NOFR: 116
 },
 {
   name: "Ipswich Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Isle of Angasly",
   NOSR: 4661,
   NODR: 141,
   NOFR: 141
 },
 {
   name: "Isle of Wight Council",
   NOSR: 7123,
   NODR: "N/A",
   NOFR: 867
 },
 {
   name: "Kent County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Kettering Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "King's Lynn & West Norfolk   Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Kirklees Metropolitan Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Knowsley Metropolitan Borough",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Lancashire County Council",
   NOSR: 9309,
   NODR: 736,
   NOFR: 1772
 },
 {
   name: "Lancaster City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Larne Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Leeds City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Leicester City Council",
   NOSR: 7046,
   NODR: "N/A",
   NOFR: 323
 },
 {
   name: "Leicestershire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Lewes District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Lichfield District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Limavady Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Lincoln City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Lincolnshire County Council",
   NOSR: 8155,
   NODR: "N/A",
   NOFR: 407
 },
 {
   name: "Lisburn City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Liverpool City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Barking   & Dagenham",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Barnet",
   NOSR: 4114,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Bexley",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Brent",
   NOSR: 9267,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Bromley",
   NOSR: 9456,
   NODR: 428,
   NOFR: 2560
 },
 {
   name: "London Borough of Camden",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Croydon",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Ealing",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Enfield",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Greenwich",
   NOSR: 4127,
   NODR: "N/A",
   NOFR: 2272
 },
 {
   name: "London Borough of Hackney",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Hammersmith   & Fulham",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Haringey",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Harrow",
   NOSR: 6801,
   NODR: 1362,
   NOFR: 1848
 },
 {
   name: "London Borough of Havering",
   NOSR: 5986,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Hillingdon",
   NOSR: 7998,
   NODR: 701,
   NOFR: 314
 },
 {
   name: "London Borough of Hounslow",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Islington",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Lambeth",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Lewisham",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Merton",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Newham",
   NOSR: 9848,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Redbridge",
   NOSR: 8207,
   NODR: 331,
   NOFR: 984
 },
 {
   name: "London Borough of Richmond   upon Thames",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Southwark",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Sutton",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Tower   Hamlets",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Waltham   Forest",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "London Borough of Wandsworth",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Luton Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Magherafelt District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Maidstone Borough Council",
   NOSR: 4197,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Maldon District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Malvern Hills District Council",
   NOSR: 2606,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Manchester City Council",
   NOSR: 10626,
   NODR: 2792,
   NOFR: 2643
 },
 {
   name: "Mansfield District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Medway Council",
   NOSR: 3039,
   NODR: 200,
   NOFR: 2
 },
 {
   name: "Melton Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Mendip District Council",
   NOSR: 3402,
   NODR: 62,
   NOFR: 398
 },
 {
   name: "Merthyr Tydfil Council",
   NOSR: 4002,
   NODR: 330,
   NOFR: 63
 },
 {
   name: "Mid & East Antrim Borough   Council",
   NOSR: 525,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Mid Devon District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Mid Suffolk District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Mid Sussex District Council",
   NOSR: 3520,
   NODR: 128,
   NOFR: 102
 },
 {
   name: "Mid-Ulster District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Middlesbrough Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Midlothian Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Milton Keynes Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Mole Valley Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Monmouthshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Moray Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Moyle District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Neath Port Talbot Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "New Forest District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Newark and Sherwood District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Newcastle upon Tyne City   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Newcastle-under-Lyme Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Newport Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Newry and Mourne District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Newtownabbey Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Norfolk County Council",
   NOSR: 7007,
   NODR: "N/A",
   NOFR: 542
 },
 {
   name: "North Ayrshire Council",
   NOSR: 1682,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Devon District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Dorset District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Down Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North East Derbyshire",
   NOSR: 1667,
   NODR: 566,
   NOFR: 330
 },
 {
   name: "North East Lincolnshire   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Hertfordshire District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Kesteven District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Lanarkshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Lincolnshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Norfolk District Council",
   NOSR: 3256,
   NODR: 304,
   NOFR: 527
 },
 {
   name: "North Somerset Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Tyneside Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Warwickshire Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North West Leicestershire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "North Yorkshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Northampton Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Northamptonshire County   Council",
   NOSR: 4010,
   NODR: "N/A",
   NOFR: 76
 },
 {
   name: "Northumberland County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Norwich City Council",
   NOSR: 4278,
   NODR: 14,
   NOFR: 1414
 },
 {
   name: "Nottingham City Council",
   NOSR: 5080,
   NODR: 693,
   NOFR: 954
 },
 {
   name: "Nottinghamshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Nuneaton & Bedworth",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Oadby & Wigston District   Council",
   NOSR: 2001,
   NODR: 272,
   NOFR: 177
 },
 {
   name: "Oldham Metropolitan Borough   Council",
   NOSR: 6591,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Omagh District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Orkney Islands Council",
   NOSR: 5219,
   NODR: 226,
   NOFR: 496
 },
 {
   name: "Oxford City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Oxfordshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Pembrokeshire Council",
   NOSR: 5041,
   NODR: "N/A",
   NOFR: 577
 },
 {
   name: "Pendle Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Perth & Kinross Council",
   NOSR: 7534,
   NODR: 1121,
   NOFR: 312
 },
 {
   name: "Peterborough City Council",
   NOSR: 6502,
   NODR: 754,
   NOFR: 1084
 },
 {
   name: "Plymouth City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Poole Borough Council",
   NOSR: 4988,
   NODR: 416,
   NOFR: 546
 },
 {
   name: "Portsmouth City Council",
   NOSR: 2597,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Powys County Council",
   NOSR: 3972,
   NODR: 343,
   NOFR: 516
 },
 {
   name: "Preston City Council",
   NOSR: 3264,
   NODR: 244,
   NOFR: "N/A"
 },
 {
   name: "Purbeck District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Reading Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Redcar and Cleveland",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Redditch Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Reigate and Banstead Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Renfrewshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Rhondda Cynon Taf County   Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Ribble Valley Borough Council",
   NOSR: 3263,
   NODR: 53,
   NOFR: 206
 },
 {
   name: "Richmondshire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Rochdale Metropolitan Borough   Council",
   NOSR: 2515,
   NODR: 111,
   NOFR: 234
 },
 {
   name: "Rochford District Council",
   NOSR: 3367,
   NODR: "N/A",
   NOFR: 224
 },
 {
   name: "Rossendale",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Rother District Council",
   NOSR: 2956,
   NODR: 51,
   NOFR: 24
 },
 {
   name: "Rotherham Metropolitan Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Royal Borough of Kensington   & Chelsea",
   NOSR: 6790,
   NODR: "N/A",
   NOFR: 861
 },
 {
   name: "Royal Borough of Kingston upon   Thames",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Royal Borough of Windsor and   Maidenhead",
   NOSR: 7134,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Rugby Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Runnymede Borough Council",
   NOSR: 3249,
   NODR: "N/A",
   NOFR: 46
 },
 {
   name: "Rushcliffe Council",
   NOSR: 3485,
   NODR: 575,
   NOFR: 546
 },
 {
   name: "Rushmoor Borough Council",
   NOSR: 3346,
   NODR: 41,
   NOFR: 431
 },
 {
   name: "Rutland County Council",
   NOSR: 4862,
   NODR: "N/A",
   NOFR: 570
 },
 {
   name: "Ryedale District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Salford City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Sandwell Metropolitan Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Scarborough Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Scottish Borders Council",
   NOSR: 4524,
   NODR: 583,
   NOFR: 667
 },
 {
   name: "Sedgemoor District Council",
   NOSR: 2673,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Sefton Metropolitan Borough   Council",
   NOSR: 4057,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Selby",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Sevenoaks District Council",
   NOSR: 4050,
   NODR: 83,
   NOFR: 52
 },
 {
   name: "Sheffield City Council",
   NOSR: 6919,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Shepway District Council",
   NOSR: 3294,
   NODR: 372,
   NOFR: 527
 },
 {
   name: "Shetland Islands Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Shropshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Slough Borough Council",
   NOSR: 7079,
   NODR: 225,
   NOFR: 561
 },
 {
   name: "Solihull Metropolitan Borough   Council",
   NOSR: 984,
   NODR: 87,
   NOFR: "N/A"
 },
 {
   name: "Somerset County Council",
   NOSR: 6541,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Ayrshire Council",
   NOSR: 4905,
   NODR: 471,
   NOFR: 1180
 },
 {
   name: "South Bucks District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Cambridgeshire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Derbyshire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Gloucestershire District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Hams District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Holland",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Kesteven",
   NOSR: 3301,
   NODR: "N/A",
   NOFR: 234
 },
 {
   name: "South Lakeland District   Council",
   NOSR: 7594,
   NODR: 1437,
   NOFR: 837
 },
 {
   name: "South Norfolk",
   NOSR: 2710,
   NODR: 166,
   NOFR: 14
 },
 {
   name: "South Northamptonshire",
   NOSR: 2626,
   NODR: 547,
   NOFR: 481
 },
 {
   name: "South Oxfordshire District   Council",
   NOSR: 4547,
   NODR: "N/A",
   NOFR: 87
 },
 {
   name: "South Ribble Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Somerset District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Staffordshire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "South Tyneside Metropolitan   Borough Council",
   NOSR: 2356,
   NODR: "N/A",
   NOFR: 573
 },
 {
   name: "Southampton City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Southend-on-Sea Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Spelthorne Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "St Albans City & District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "St Edmundsbury Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "St Helens Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Stafford Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Staffordshire County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Staffordshire Moorlands   District Council",
   NOSR: 3140,
   NODR: 547,
   NOFR: "N/A"
 },
 {
   name: "Stevenage Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Stirling Council",
   NOSR: 1311,
   NODR: 219,
   NOFR: 199
 },
 {
   name: "Stockport Metropolitan Borough   Council",
   NOSR: 7284,
   NODR: 1066,
   NOFR: 1188
 },
 {
   name: "Stockton-on-Tees Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Stoke-on-Trent City Council",
   NOSR: 7669,
   NODR: 549,
   NOFR: 2194
 },
 {
   name: "Strabane District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Stratford District Council",
   NOSR: 1906,
   NODR: 34,
   NOFR: "N/A"
 },
 {
   name: "Stratford-on-Avon",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Stroud District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Suffolk Coastal District   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Suffolk County Council",
   NOSR: 7622,
   NODR: 677,
   NOFR: 485
 },
 {
   name: "Sunderland City Council",
   NOSR: 7325,
   NODR: "N/A",
   NOFR: 554
 },
 {
   name: "Surrey County Council",
   NOSR: 11197,
   NODR: 267,
   NOFR: "N/A"
 },
 {
   name: "Surrey Heath Borough Council",
   NOSR: 3821,
   NODR: 726,
   NOFR: 97
 },
 {
   name: "Swale Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Swindon Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Tameside Metropolitan Borough   Council",
   NOSR: 5845,
   NODR: "N/A",
   NOFR: 2179
 },
 {
   name: "Tamworth Borough Council",
   NOSR: 1222,
   NODR: 750,
   NOFR: 147
 },
 {
   name: "Tandridge District Council",
   NOSR: 3555,
   NODR: "N/A",
   NOFR: 87
 },
 {
   name: "Taunton Deane BC and West   Somerset Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Taunton Deane Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Teignbridge District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Telford & Wrekin Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Tendring District Council",
   NOSR: 2966,
   NODR: 73,
   NOFR: 80
 },
 {
   name: "Test Valley Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Tewkesbury Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Thanet District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Three Rivers District Council",
   NOSR: 3025,
   NODR: "N/A",
   NOFR: 157
 },
 {
   name: "Thurrock Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Tonbridge and Malling Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Torbay Council",
   NOSR: 2892,
   NODR: 727,
   NOFR: 255
 },
 {
   name: "Torfaen County Borough",
   NOSR: 5067,
   NODR: 177,
   NOFR: 54
 },
 {
   name: "Torridge District Council",
   NOSR: 3064,
   NODR: "N/A",
   NOFR: 32
 },
 {
   name: "Trafford Council",
   NOSR: 2428,
   NODR: "N/A",
   NOFR: 721
 },
 {
   name: "Tunbridge Wells Borough   Council",
   NOSR: 3455,
   NODR: 186,
   NOFR: 375
 },
 {
   name: "Uttlesford District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Vale of Glamorgan",
   NOSR: 4773,
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Vale of White Horse District   Council",
   NOSR: 5288,
   NODR: "N/A",
   NOFR: 98
 },
 {
   name: "Wakefield City Metropolitan   District Council",
   NOSR: 8043,
   NODR: 1491,
   NOFR: 426
 },
 {
   name: "Walsall Metropolitan Borough   Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Warrington Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Warwick District Council",
   NOSR: 2687,
   NODR: "N/A",
   NOFR: 460
 },
 {
   name: "Warwickshire County Council",
   NOSR: 7031,
   NODR: "N/A",
   NOFR: 420
 },
 {
   name: "Watford Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Waveney District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Waverley Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wealden District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wellingborough",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Welwyn Hatfield Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Berkshire Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Devon Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Dorset District Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Dunbartonshire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Lancashire District   Council",
   NOSR: 2555,
   NODR: "N/A",
   NOFR: 230
 },
 {
   name: "West Lindsey",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Lothian Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Oxfordshire",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Somerset",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "West Sussex County Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Weymouth & Portland   Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wigan Metropolitan Borough",
   NOSR: 4071,
   NODR: 294,
   NOFR: 896
 },
 {
   name: "Wiltshire Council",
   NOSR: 7877,
   NODR: 452,
   NOFR: 1247
 },
 {
   name: "Winchester City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wirral Metropolitan Borough",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Woking Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wokingham Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wolverhampton City Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Worcester City Council",
   NOSR: 1933,
   NODR: 1902,
   NOFR: 385
 },
 {
   name: "Worcestershire County Council",
   NOSR: 5519,
   NODR: "N/A",
   NOFR: 339
 },
 {
   name: "Worthing Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wrexham County Borough Council",
   NOSR: 4611,
   NODR: "N/A",
   NOFR: 1611
 },
 {
   name: "Wychavon District Council",
   NOSR: 3056,
   NODR: "N/A",
   NOFR: 149
 },
 {
   name: "Wycombe District Council",
   NOSR: 3401,
   NODR: "N/A",
   NOFR: 287
 },
 {
   name: "Wyre Borough Council",
   NOSR: "N/A",
   NODR: "N/A",
   NOFR: "N/A"
 },
 {
   name: "Wyre Forest District Council",
   NOSR: 2791,
   NODR: "N/A",
   NOFR: 399
 }
];
  
});