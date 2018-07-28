/** 
 * هذا الكود منشور تحت رخضة المشاع الإبداعي الإصدار 3.0
 * ويمكنك نشر، أو نسخ، أو إعادة توزيع الكود حتى للأغراض التجارية
 * Author: ASammour
 * E-mail: amsammour[at]gmail[dot]com
*/


/**
 * 
 * 
 * فيما يلي تعريف لبعض المصفوفات
 * التي تحتوي على تفسير الأرقام حسب المنازل العشرية
 * 
 * 
 */


/*
القيم الخاصة بقيم الآحاد
وحتى الرقم 12
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
    39: "ملايين",
    1199: "مليونًا"
}


/*
القيم الخاصة بقيم المليارات
* */
var billions = {
    1: "مليار",
    2: "ملياران",
    39: "مليارات",
    1199: "مليارًا"
}

/*
القيم الخاصة بقيم التريليونات
* */
var trillions = {
    1: "تريليون",
    2: "تريليونان",
    39: "تريليونات",
    1199: "تريليونًا"
}


/**
 * 
 * @param {*} number 
 * هذه هي الدالة الرئيسية
 * والتي يتم من خلالها تفقيط الأرقام
 */
function tafqeet(number) {
    
    /**
     * متغير لتخزين النص المفقط بداخله
     */

    var value = "";

    //التحقق من أن المتغير يحتوي أرقامًا فقط، وأقل من تسعة وتسعين تريليون
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
             * إذا كان العدد من 100000000000 إلى 9999999999999
             * أي يشمل التريليونات وعشرات التريليونات
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
     * تظهر هذه الزوائد نتيجة بعض الفروق في عملية التفقيط
     * ولإزالتها يتم استخدام هذا السطر
     */
    return value.replace (/وصفر/g,"")
    .replace (/وundefined/g,"")
    .replace(/ +(?= )/g,'')
    .replace (/صفر و/g,"")
    .replace (/صفر/g,"")
    .replace (/مئتان أ/,"مائتا أ")
    .replace (/مئتان م/,"مائتا م");
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
    
    /**
     * إذا كان الرقم لا يحتوي على ثلاث منازل
     * سيتم إضافة أصفار إلى يسار الرقم
     */
    while (number.toString().length !=3){
        number = "0"+number;
    }

    var first = getNth (number, 0,0);

    /**
     * تحديد قيمة الرقم الأول
     */
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

    /**
     * إضافة منزلة العشرات إلى الرقم المفقط
     * باستخدام دالة العشرات السابقة
     */
    value = value + " و"+oneTen (parseInt (getNth (number,1,2)));
    return value;
}

/**
 * 
 * @param {*} number 
 * الدالة الخاصة بالآلاف
 */
function thousand(number) {
    return thousandsTrillions (thousands["1"],thousands["2"], thousands["39"], thousands["1199"], 0, parseInt (number),  (getNthReverse (number, 4)));
}

/**
 * 
 * @param {*} number
 * الدالة الخاصة بالملايين 
 */
function million(number) {
    return thousandsTrillions (millions["1"],millions["2"], millions["39"], millions["1199"], 3, parseInt (number),  (getNthReverse (number, 7)));
}


/**
 * 
 * @param {*} number
 * الدالة الخاصة بالمليارات 
 */
function billion(number) {
    return thousandsTrillions (billions["1"],billions["2"], billions["39"], billions["1199"], 6, parseInt (number),  (getNthReverse (number, 10)));
}


/**
 * 
 * @param {*} number
 * الدالة الخاصة بالترليونات 
 */
function trillion(number) {
    return thousandsTrillions (trillions["1"],trillions["2"], trillions["39"], trillions["1199"], 9, parseInt (number),  (getNthReverse (number, 13)));
}


/**
 * هذه الدالة هي الأساسية بالنسبة للأرقام
 * من الآلاف وحتى التريليونات
 * تقوم هذه الدالة بنفس العملية للمنازل السابقة مع اختلاف
 * زيادة عدد المنازل في كل مرة
 * @param {*} one 
 * @param {*} two 
 * @param {*} three 
 * @param {*} eleven 
 * @param {*} diff 
 * @param {*} number 
 * @param {*} other 
 */
function thousandsTrillions (one, two, three, eleven, diff, number, other){
    /**
     * جلب المنازل المتبقية
     */
    other = parseInt (other);
    other = tafqeet (other);
    
    /**
     * إذا كان المتبقي يساوي صفر
     */
    if (other == ""){
        other = "صفر"
    }

    var value = "";

    number = parseInt (number);

    /**
     * التحقق من طول الرقم
     * لاكتشاف إلى أي منزلة ينتمي
     */
    switch (number.toString().length){
        /**
         * ألوف، أو ملايين، أو مليارات، أو تريليونات
         */
        case 4+diff:
            var ones = parseInt (getNth (number, 0,0));
            switch (ones){
                case 1:
                    value = one  + " و"+ (other);
                    break;
                case 2:
                    value = two + " و"+ (other);
                    break;
                default:
                    value = oneTen (ones) +" "+ three + " و"+ (other);
                    break;
            }
            break;

        /**
         * عشرات الألوف، أو عشرات الملايين، أو عشرات المليارات، أو عشرات التريليونات
         */
        case 5+diff:
            var tens = parseInt (getNth (number, 0,1));
            switch (tens){
                case 10:
                    value = oneTen (tens) +" "+ three + " و"+ (other);
                    break;
                default:
                    value = oneTen (tens) +" "+ eleven + " و"+ (other);
                    break;
            }
            break;
        
        /**
         *مئات الألوف، أو مئات الملايين، أو مئات المليارات
         */
        case 6+diff:
            var hundreds = parseInt (getNth (number, 0,2));
            
            var two = parseInt (getNth (number, 1,2));
            var th = "";
            switch (two){
                case 0:
                    th = one;
                    break;
                
                default:
                    th = eleven;
                    break;    
            }
            switch (tens){
                case 100<=tens<=199:
                    value = hundred (hundreds) +" "+ th + " و"+ (other);
                    break;
                case 200<=tens<=299:
                    value = hundred (hundreds) +" "+ th + " و"+ (other);
                    break;
                default:
                    value = hundred (hundreds) +" "+ th + " و"+ (other);
                    break;    
            }
            break;
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

/**
 * دالة تجلب أجزاء من الرقم بالعكس
 * @param {*} number 
 * @param {*} limit 
 */
function getNthReverse(number, limit){
    var finalNumber = "";
    var x = 1;
    while (x != limit){
        finalNumber = String (number).charAt(number.toString().length-x) + finalNumber;
        x++;
    }

    return finalNumber;
}
