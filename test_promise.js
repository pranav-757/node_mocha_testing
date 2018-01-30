var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// // call our promise
// var askMom = function () {
//     willIGetNewPhone
//         .then(function (fulfilled) {
//             // yay, you got a new phone
//             console.log(fulfilled);
//          // output: { brand: 'Samsung', color: 'black' }
//        }, function (err){
//          console.log(err);
//        });
//         // .catch(function (error) {
//         //     // oops, mom don't buy it
//         //     console.log(error.message);
//         //  // output: 'mom is not happy'
//         // });
// };
//
// askMom();

//2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};

// call our promise
var askMom = function () {
  console.log('before asking Mom'); // log before
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);  // note the value of fulfilled has now changed
                                     //its now equal to agruments send by showOff method
         // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
        //console.log('after asking Mom'); // log before
};

askMom();
