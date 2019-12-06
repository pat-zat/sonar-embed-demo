// //inject custom pricing or availability information into the display pages of the parts finder
// function InjectPriceAndStock() {
//     $(".priceHolder").each(function (index) {
//         //This sets the price.
//         $(this).html("$13.99");
//         //This will allow you to reference your SKU.
//         $(this).data("sku");
//     });
//     $(".stockMessage").each(function (index) {
//         //This sets the availability message.
//         $(this).html("Ships when available.");
//         //This will allow you to reference your SKU.
//         $(this).data("sku");
//     });
// }

// //SONAREmbed:EngineItemSectionLoaded is raised when a category is selected on an engine detail page. 
// $(".sonar-embed").on("SONAREmbed:EngineItemSectionLoaded", function () {
//     console.log("Engine Item Section Loaded");
//     InjectPriceAndStock();
// });

// //SONAREmbed:SearchBySierraResultsLoaded is raised when results from a “Sierra Part #” search are returned and loaded.
//     $(".sonar-embed").on("SONAREmbed:SearchBySierraResultsLoaded", function () {
//         console.log("Search Results Loaded");
//         InjectPriceAndStock();
//     });

// //SONAREmbed:ItemDetailPageLoaded is raised when an Item Detail Page is loaded.
// $(".sonar-embed").on("SONAREmbed:ItemDetailPageLoaded", function () {
//     console.log("Item Details Loaded");
//     InjectPriceAndStock();
// });

// //SONAREmbed:PickListPageLoaded is raised when the Parts List Page is loaded.
// $(".sonar-embed").on("SONAREmbed:PickListPageLoaded", function () {
//     console.log("Pick List Page Loaded");
//     InjectPriceAndStock();
// });

// //SONAREmbed:SearchByOEResultsLoaded is raised when results from a “OEM Part #” search completes.
//     $(".sonar-embed").on("SONAREmbed:SearchByOEResultsLoaded", function () {
//         console.log("Search OE Results Loaded");
//         InjectPriceAndStock();
//     });



// //SONAREmbed:EngineDetailPageLoaded is raised when an Engine (Model) Detail Page is loaded.
// $(".sonar-embed").on("SONAREmbed:EngineDetailPageLoaded", function () {
//     console.log("Engine Details Loaded");
//     InjectPriceAndStock();
// });



// //add to cart
// var AddManyToCartTrigger = function () {
//     $(".sonar-embed").trigger("SONAREmbed:AddManyToCart");
// };
// var AddOneToCartTrigger = function () {
//     $(".sonar-embed").trigger("SONAREmbed:AddOneToCart");
// };


// // Code to add one item to cart
// function AddOneItemToCart(pSku) {
//     // Your sku variable
//     var data = { "<Your_Custom_Object_Property_Name>": pSku };
//     $.ajax({
//         // Your url for your add one item to cart POST request
//         url: '</example/url/path/to/addOneItemToCart/functionality>',
//         type: 'POST',
//         data: $.param(data),
//         cache: false,
//         async: false,
//         success: function (result) {
//             // console.log("Item Added to Cart: " + result);
//             toastr.success('Item Added to Cart.');
//             AddOneToCartTrigger();
//             ga('sonarEmbed.send', {
//                 hitType: 'event',
//                 eventCategory: 'Cart',
//                 eventAction: 'Item Added to Cart',
//                 eventLabel: JSON.stringify({ "Item": pSku, "Sku": pSku })
//             });
//         }
//     });
//     return true;
// }


// const pickCode = `
// // For adding the parts in the parts list to the cart.
// function AddPartsListToCart() {
//     var skuList = [];
//     $(".pickListQuantity").each(function (index) {
//         var newItem = { "qty": $(this).val(), "sku": $(this).data("sku") };
//         skuList.push(newItem);
//     });
//     if (skuList.length > 0) {
//         AddManyItemToCart(skuList);
//     }
// }
// `;




// // Code to add many items to cart
// function AddManyItemToCart(pSkuArray) {
//     var data = {};
//     // Your array / list variable that stores each sku
//     $.each(pSkuArray, function (index, value) {
//         data["<Your_Custom_Array_Name>['" + value.sku + "']"] = value;
//     });
//     if (typeof pSkuArray !== "undefined" && pSkuArray.length > 0) {
//         $.ajax({
//             // Your url for your add many items to cart POST request
//             url: "</example/url/path/to/addManyItemsToCart/functionality>",
//             type: 'POST',
//             data: $.param(data),
//             cache: false,
//             async: false,
//             success: function (result) {
//                 // console.log("Many Items Added to Cart: " + result);
//                 toastr.success(pSkuArray.length + ' Items Added to Cart.');
//                 AddManyToCartTrigger();
//                 ga('sonarEmbed.send', {
//                     hitType: 'event',
//                     eventCategory: 'Cart',
//                     eventAction: 'Many Item Added to Cart',
//                     eventLabel: JSON.stringify(pSkuArray)
//                 });
//             }
//         });
//         return true;
//     } else {
//         return false;
//     }
// }