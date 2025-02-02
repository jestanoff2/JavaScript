function Vacation(numberOfPeople, typeOfGroup, day) {
    // let singlePrice = 0;

    const singlePrice = {
        Friday : {
            Students : 8.45,
            Business : 10.90,
            Regular : 15.00,
        },
        Saturday : {
            Students : 9.80,
            Business : 15.60,
            Regular : 20.00,
        },
        Sunday : {
            Students : 10.46,
            Business : 16.00,
            Regular : 22.50,
        },
    }
    let totalPrice = numberOfPeople * singlePrice[day][typeOfGroup];
    // switch (day) {
    //     case 'Friday':
    //         if (typeOfGroup === 'Students') {
    //             singlePrice = 8.45;
    //         } else if (typeOfGroup === 'Business') {
    //             singlePrice = 10.90;
    //         } else if (typeOfGroup === 'Regular') {
    //             singlePrice = 15.00;
    //         }
    //         break;
    //     case 'Saturday':
    //         if (typeOfGroup === 'Students') {
    //             singlePrice = 9.80;
    //         } else if (typeOfGroup === 'Business') {
    //             singlePrice = 15.60;
    //         } else if (typeOfGroup === 'Regular') {
    //             singlePrice = 20.00;
    //         }
    //         break;
    //     case 'Sunday':
    //         if (typeOfGroup === 'Students') {
    //             singlePrice = 10.46;
    //         } else if (typeOfGroup === 'Business') {
    //             singlePrice = 16.00;
    //         } else if (typeOfGroup === 'Regular') {
    //             singlePrice = 22.50;
    //         }
    //         break;
    // }
    
    if (typeOfGroup == 'Students' && numberOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfGroup == 'Business' && numberOfPeople >= 100) {
        totalPrice -= 10 * singlePrice[day][typeOfGroup];
    } else if (typeOfGroup == 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

Vacation(30, "Students", "Sunday");