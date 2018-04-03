/** 
 * هذا الكود منشور تحت رخضة المشاع الإبداعي الإصدار 3.0
 * ويمكنك نشر، أو نسخ، أو إعادة توزيع الكود حتى للأغراض التجارية
 * Author: ASammour
 * E-mail: amsammour[at]gmail[dot]com
*/



/*
القيم الخاصة بقيم الآحاد
* */
var ones = {
    0: "صفر",
    1: "واحد",
    2: "اثنان",
    3: "ثلاثة",
    4: "أربعة",
    5: "خمسة",
    6: "ستة",
    7: "سبعة",
    8: "ثمانية",
    9: "تسعة",
    10: "عشرة",
    11: "أحد عشر",
    12: "اثنى عشر"
}

/*
القيم الخاصة بقيم العشرات
* */
var tens = {
    1: "عشر",
    2: "عشرون",
    3: "ثلاثون",
    4: "أربعون",
    5: "خمسون",
    6: "ستون",
    7: "سبعون",
    8: "ثمانون",
    9: "تسعون"
}


/*
القيم الخاصة بقيم المئات
* */
var hundreds = {
    0: "صفر",
    1: "مائة",
    2: "مئتان",
    3: "ثلاثمائة",
    4: "أربعمائة",
    5: "خمسمائة",
    6: "ستمائة",
    7: "سبعمائة",
    8: "ثمانمائة",
    9: "تسعمائة"
}

/*
القيم الخاصة بقيم الآلاف
* */
var thousands = {
    1: "ألف",
    2: "ألفان",
    39: "آلاف",
    1199: "ألفًا"
}

/*
القيم الخاصة بقيم الملايين
* */
var millions = {
    1: "مليون",
    2: "مليونان",
    39: "ملايين"
}


/*
القيم الخاصة بقيم المليارات
* */
var billions = {
    1: "مليار",
    2: "ملياران",
    39: "مليارات"
}

/*
القيم الخاصة بقيم التريليونات
* */
var trillions = {
    1: "تريليون",
    2: "تريليونان",
    39: "تريليونات"
}


/**
 * 
 * @param {*} number 
 * هذه هي الدالة الرئيسية
 * والتي يتم من خلالها تفقيط الأرقام
 */
function tafqeet(number) {
    var value = "";

    //التحقق من أن المتغير يحتوي أرقامًا فقط، وأقل من تسعمائة تريليون
    if (number.toString ().match(/^[0-9]+$/) != null && number.toString().length <= 14) {
        switch (number.toString().length) {
            /**
             * إذا كان العدد من 0 إلى 99
             */
            case 1:
            case 2:
                value = oneTen(number);
                break;

            /**
             * إذا كان العدد من 100 إلى 999
             */
            case 3:
                value = hundred(number);
                break;

            /**
             * إذا كان العدد من 1000 إلى 999999
             * أي يشمل الآلاف وعشرات الألوف ومئات الألوف
             */
            case 4:
            case 5:
            case 6:
                value = thousand(number);
                break;

            /**
             * إذا كان العدد من 1000000 إلى 999999999
             * أي يشمل الملايين وعشرات الملايين ومئات الملايين
             */
            case 7:
            case 8:
            case 9:
                value = million(number);
                break;

            /**
             * إذا كان العدد من 1000000000 إلى 999999999999
             * أي يشمل المليارات وعشرات المليارات ومئات المليارات
             */
            case 10:
            case 11:
            case 12:
                value = billion(number);
                break;

            /**
             * إذا كان العدد من 100000000000 إلى 99999999999999
             * أي يشمل التريليونات وعشرات التريليونات ومئات التريليونات
             */
            case 13:
            case 14:
            case 15:
                value = trillion(number);
                break;

        }

    }

    /**
     * هذا السطر يقوم فقط بإزالة بعض الزوائد من النص الأخير
     */
    return value.replace (/وصفر/g,"").replace (/وundefined/g,"").replace(/ +(?= )/g,'').replace (/صفر/g,"");
}


/**
 * 
 * @param {*} number
 * الدالة الخاصة بالآحاد والعشرات 
 */
function oneTen(number) {

    /** 
     * القيم الافتراضية
    */
    var value = "صفر";

    //من 0 إلى 12
    if (number <= 12) {
        switch (parseInt (number)) {
            case 0:
                value = ones["0"];
                break;
            case 1:
                value = ones["1"];
                break;
            case 2:
                value = ones["2"];
                break;
            case 3:
                value = ones["3"];
                break;
            case 4:
                value = ones["4"];
                break;
            case 5:
                value = ones["5"];
                break;
            case 6:
                value = ones["6"];
                break;
            case 7:
                value = ones["7"];
                break;
            case 8:
                value = ones["8"];
                break;
            case 9:
                value = ones["9"];
                break;
            case 10:
                value = ones["10"];
                break;

            case 11:
                value = ones["11"];
                break;

            case 12:
                value = ones["12"];
                break;


        }
    }

    /**
     * إذا كان العدد أكبر من12 وأقل من 99
     * يقوم بجلب القيمة الأولى من العشرات
     * والثانية من الآحاد
     */
    else {
        var first = getNth (number, 0,0);
        
        var second = getNth (number, 1,1);

        if(tens[first] == "عشر"){
            value = ones[second] + " " + tens[first];
        } 
        else{
            value = ones[second] + " و" + tens[first];
        }
        
    }

    return value;
}


/**
 * 
 * @param {*} number
 * الدالة الخاصة بالمئات 
 */
function hundred(number) {
    var value = "";
    

    while (number.toString().length !=3){
        number = "0"+number;
    }

    var first = getNth (number, 0,0);
    switch (parseInt(first)) {
        case 0:
            value = hundreds["0"];
            break;
        case 1:
            value = hundreds["1"];
            break;
        case 2:
            value = hundreds["2"];
            break;
        case 3:
            value = hundreds["3"];
            break;
        case 4:
            value = hundreds["4"];
            break;
        case 5:
            value = hundreds["5"];
            break;
        case 6:
            value = hundreds["6"];
            break;
        case 7:
            value = hundreds["7"];
            break;
        case 8:
            value = hundreds["8"];
            break;
        case 9:
            value = hundreds["9"];
            break;
    }
    value = value + " و"+oneTen (parseInt (getNth (number,1,2)));
    return value;
}

/**
 * 
 * @param {*} number 
 * الدالة الخاصة بالآلاف
 */
function thousand(number) {
    var value = "";

    number = parseInt (number);

    //إذا كان من 100 إلى 2999
    if (number>= 1000 & number <= 2999){
        if (getNth (number, 0,0) == "1"){
            value = thousands["1"]  + " و"+hundred (parseInt (getNth (number, 1,3)));
        }
        else if (getNth (number, 0,0) == "2"){
            value = thousands["2"] + " و"+hundred (parseInt (getNth (number, 1,3)));
        }
    }


    /**
     * من 3000 إلى 9999
     */
    else if (number>= 3000 & number <= 9999){
        value = oneTen (parseInt (getNth (number, 0,0))) +" "+ thousands["39"] + " و"+hundred (parseInt (getNth (number, 1,3)));
    }

    /**
     * من 10000 حتى 10999
     */
    else if ( number>= 10000 && number<= 10999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ thousands["39"] + " و"+hundred (parseInt (getNth (number, 1,4)));
    }

    /**
     * من 99999 حتى 11000
     */
    else if ( number>= 11000 && number<= 99999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ thousands["1199"] + " و"+hundred (parseInt (getNth (number, 2,4)));
    }

    /**
     * من 100000 حتى 999999
     */
    else if ( number>= 100000 && number<= 999999){
        value = hundred (parseInt (getNth (number, 0,2))) +" "+ thousands["1"] + " و"+hundred (parseInt (getNth (number, 3,5)));
    }


    return value;
}


/**
 * 
 * @param {*} number
 * الدالة الخاصة بالملايين 
 */
function million(number) {
    var value = "";

    number = parseInt (number);

    if (number>= 1000000 & number <= 2999999){
        if (getNth (number, 0,0) == "1"){
            value = millions["1"]  + " و"+thousand (parseInt (getNth (number, 1,6)));
        }
        else if (getNth (number, 0,0) == "2"){
            value = millions["2"] + " و"+thousand (parseInt (getNth (number, 1,6)));
        }
    }

    else if (number>= 3000000 & number <= 9999999){
        value = oneTen (parseInt (getNth (number, 0,0))) +" "+ millions["39"] + " و"+thousand (parseInt (getNth (number, 1,6)));
    }

    else if ( number>= 10000000 && number<= 10999999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ millions["39"] + " و"+thousand (parseInt (getNth (number, 1,7)));
    }

    else if ( number>= 11000000 && number<= 99999999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ millions["1"] + " و"+thousand (parseInt (getNth (number, 2,7)));
    }
    else if ( number>= 100000000 && number<= 999999999){
        value = hundred (parseInt (getNth (number, 0,2))) +" "+ millions["1"] + " و"+thousand (parseInt (getNth (number, 3,8)));
    }

    return value;
}


/**
 * 
 * @param {*} number
 * الدالة الخاصة بالمليارات 
 */
function billion(number) {
    var value = "";

    number = parseInt (number);

    if (number>= 1000000000 & number <= 2999999999){
        if (getNth (number, 0,0) == "1"){
            value = billions["1"]  + " و"+million (parseInt (getNth (number, 1,9)));
        }
        else if (getNth (number, 0,0) == "2"){
            value = billions["2"] + " و"+million (parseInt (getNth (number, 1,9)));
        }
    }

    else if (number>= 3000000000 & number <= 9999999999){
        value = oneTen (parseInt (getNth (number, 0,0))) +" "+ billions["39"] + " و"+million (parseInt (getNth (number, 1,9)));
    }

    else if ( number>= 10000000000 && number<= 10999999999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ billions["39"] + " و"+million (parseInt (getNth (number, 1,10)));
    }

    else if ( number>= 11000000000 && number<= 99999999999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ billions["1"] + " و"+million (parseInt (getNth (number, 2,11)));
    }
    else if ( number>= 100000000000 && number<= 999999999999){
        value = hundred (parseInt (getNth (number, 0,2))) +" "+ billions["1"] + " و"+million (parseInt (getNth (number, 3,12)));
    }

    return value;

}


/**
 * 
 * @param {*} number
 * الدالة الخاصة بالترليونات 
 */
function trillion(number) {
    var value = "";

    number = parseInt (number);

    if (number>= 1000000000000 & number <= 2999999999999){
        if (getNth (number, 0,0) == "1"){
            value = trillions["1"]  + " و"+billion (parseInt (getNth (number, 1,12)));
        }
        else if (getNth (number, 0,0) == "2"){
            value = trillions["2"] + " و"+billion (parseInt (getNth (number, 1,12)));
        }
    }

    else if (number>= 3000000000000 & number <= 9999999999999){
        value = oneTen (parseInt (getNth (number, 0,0))) +" "+ trillions["39"] + " و"+billion (parseInt (getNth (number, 1,12)));
    }

    else if ( number>= 10000000000000 && number<= 10999999999999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ trillions["39"] + " و"+billion (parseInt (getNth (number, 1,13)));
    }

    else if ( number>= 11000000000000 && number<= 99999999999999){
        value = oneTen (parseInt (getNth (number, 0,1))) +" "+ trillions["1"] + " و"+billion (parseInt (getNth (number, 2,14)));
    }
    return value;
}


/**
 * دالة لجلب أجزاء من الرقم المراد تفقيطه
 */
function getNth(number, first, end){
    var finalNumber = "";
    for (var i=first;i<=end;i++){
        finalNumber = finalNumber + String (number).charAt(i);
    }
    return finalNumber;
}