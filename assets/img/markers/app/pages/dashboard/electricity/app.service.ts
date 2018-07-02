import { Injectable } from '@angular/core';

export class Value {
    value: number;
    diff: number;
}

export class DayClose {
    close: number;
    date: Date;
}

export class WeekData {
    code: string;
    open: Value;
    high: Value;
    low: Value;
    close: Value;
    volume: number;
    adjClose: number;
    dayClose: DayClose[];
}

let weekData: WeekData[] = [{
    "code": "G003",
    "open": {
        "value": 3563.19,
        "diff": 92.76
    },
    "high": {
        "value": 3591.31,
        "diff": 50.34
    },
    "low": {
        "value": 3552.3,
        "diff": 129.44
    },
    "close": {
        "value": 3574.02,
        "diff": 42.83
    },
    "volume": 1254340000,
    "adjClose": 3574.02,
    "dayClose": [{
        "close": 3569.4,
        "date": new Date("2013/12/23")
    }, {
        "close": 3572.8,
        "date": new Date("2013/12/24")
    }, {
        "close": 3584.58,
        "date": new Date("2013/12/26")
    }, {
        "close": 3574.02,
        "date": new Date("2013/12/27")
    }]
}, {
    "code": "G004",
    "open": {
        "value": 3470.43,
        "diff": -45.24
    },
    "high": {
        "value": 3540.97,
        "diff": 16.96
    },
    "low": {
        "value": 3422.86,
        "diff": -26.88
    },
    "close": {
        "value": 3531.19,
        "diff": 74.79
    },
    "volume": 2261352000,
    "adjClose": 3531.19,
    "dayClose": [{
        "close": 3475.79,
        "date": new Date("2013/12/16")
    }, {
        "close": 3469.32,
        "date": new Date("2013/12/17")
    }, {
        "close": 3509.63,
        "date": new Date("2013/12/18")
    }, {
        "close": 3498.63,
        "date": new Date("2013/12/19")
    }, {
        "close": 3531.19,
        "date": new Date("2013/12/20")
    }]
}, {
    "code": "G005",
    "open": {
        "value": 3515.67,
        "diff": 19.48
    },
    "high": {
        "value": 3524.01,
        "diff": 12.91
    },
    "low": {
        "value": 3449.74,
        "diff": -3.48
    },
    "close": {
        "value": 3456.4,
        "diff": -47.86
    },
    "volume": 1802822000,
    "adjClose": 3456.4,
    "dayClose": [{
        "close": 3516.17,
        "date": new Date("2013/12/09")
    }, {
        "close": 3514.2,
        "date": new Date("2013/12/10")
    }, {
        "close": 3468.99,
        "date": new Date("2013/12/11")
    }, {
        "close": 3460.29,
        "date": new Date("2013/12/12")
    }, {
        "close": 3456.4,
        "date": new Date("2013/12/13")
    }]
}, {
    "code": "G006",
    "open": {
        "value": 3496.19,
        "diff": 62.27
    },
    "high": {
        "value": 3511.1,
        "diff": 15.13
    },
    "low": {
        "value": 3453.22,
        "diff": 32.86
    },
    "close": {
        "value": 3504.26,
        "diff": 16.44
    },
    "volume": 1810088000,
    "adjClose": 3504.26,
    "dayClose": [{
        "close": 3481.15,
        "date": new Date("2013/12/02")
    }, {
        "close": 3479.34,
        "date": new Date("2013/12/03")
    }, {
        "close": 3483.01,
        "date": new Date("2013/12/04")
    }, {
        "close": 3477.73,
        "date": new Date("2013/12/05")
    }, {
        "close": 3504.26,
        "date": new Date("2013/12/06")
    }]
}, {
    "code": "G023",
    "open": {
        "value": 3433.92,
        "diff": 10.45
    },
    "high": {
        "value": 3495.97,
        "diff": 66.77
    },
    "low": {
        "value": 3420.36,
        "diff": 61.05
    },
    "close": {
        "value": 3487.82,
        "diff": 65.8
    },
    "volume": 1508490000,
    "adjClose": 3487.82,
    "dayClose": [{
        "close": 3427.49,
        "date": new Date("2013/11/25")
    }, {
        "close": 3445.76,
        "date": new Date("2013/11/26")
    }, {
        "close": 3470.48,
        "date": new Date("2013/11/27")
    }, {
        "close": 3487.82,
        "date": new Date("2013/11/29")
    }]
}, {
    "code": "G024",
    "open": {
        "value": 3423.47,
        "diff": 63.64
    },
    "high": {
        "value": 3429.2,
        "diff": 6.62
    },
    "low": {
        "value": 3359.31,
        "diff": 12.9
    },
    "close": {
        "value": 3422.02,
        "diff": -0.56
    },
    "volume": 1742680000,
    "adjClose": 3422.02,
    "dayClose": [{
        "close": 3388.87,
        "date": new Date("2013/11/18")
    }, {
        "close": 3378.13,
        "date": new Date("2013/11/19")
    }, {
        "close": 3367.17,
        "date": new Date("2013/11/20")
    }, {
        "close": 3402.74,
        "date": new Date("2013/11/21")
    }, {
        "close": 3422.02,
        "date": new Date("2013/11/22")
    }]
}, {
    "code": "G027",
    "open": {
        "value": 3359.83,
        "diff": -28.87
    },
    "high": {
        "value": 3422.58,
        "diff": 21.31
    },
    "low": {
        "value": 3346.41,
        "diff": 28.01
    },
    "close": {
        "value": 3422.58,
        "diff": 55.74
    },
    "volume": 1812784000,
    "adjClose": 3422.58,
    "dayClose": [{
        "close": 3362.98,
        "date": new Date("2013/11/11")
    }, {
        "close": 3365.23,
        "date": new Date("2013/11/12")
    }, {
        "close": 3405.56,
        "date": new Date("2013/11/13")
    }, {
        "close": 3415.14,
        "date": new Date("2013/11/14")
    }, {
        "close": 3422.58,
        "date": new Date("2013/11/15")
    }]
}, {
    "code": "G030",
    "open": {
        "value": 3388.7,
        "diff": 6.52
    },
    "high": {
        "value": 3401.27,
        "diff": -7.01
    },
    "low": {
        "value": 3318.4,
        "diff": -46.25
    },
    "close": {
        "value": 3366.84,
        "diff": -12.92
    },
    "volume": 2011546000,
    "adjClose": 3366.84,
    "dayClose": [{
        "close": 3384.75,
        "date": new Date("2013/11/04")
    }, {
        "close": 3388.82,
        "date": new Date("2013/11/05")
    }, {
        "close": 3385.38,
        "date": new Date("2013/11/06")
    }, {
        "close": 3321.41,
        "date": new Date("2013/11/07")
    }, {
        "close": 3366.84,
        "date": new Date("2013/11/08")
    }]
}, {
    "code": "G032",
    "open": {
        "value": 3382.18,
        "diff": 20.42
    },
    "high": {
        "value": 3408.28,
        "diff": 8.24
    },
    "low": {
        "value": 3364.65,
        "diff": 34.45
    },
    "close": {
        "value": 3379.76,
        "diff": -4.07
    },
    "volume": 1962860000,
    "adjClose": 3379.76,
    "dayClose": [{
        "close": 3382.68,
        "date": new Date("2013/10/28")
    }, {
        "close": 3391.75,
        "date": new Date("2013/10/29")
    }, {
        "close": 3385.38,
        "date": new Date("2013/10/30")
    }, {
        "close": 3377.73,
        "date": new Date("2013/10/31")
    }, {
        "close": 3379.76,
        "date": new Date("2013/11/01")
    }]
}, {
    "code": "G034",
    "open": {
        "value": 3361.76,
        "diff": 148.38
    },
    "high": {
        "value": 3400.04,
        "diff": 44.41
    },
    "low": {
        "value": 3330.2,
        "diff": 118.15
    },
    "close": {
        "value": 3383.83,
        "diff": 29.95
    },
    "volume": 1952026000,
    "adjClose": 3383.83,
    "dayClose": [{
        "close": 3361.18,
        "date": new Date("2013/10/21")
    }, {
        "close": 3366.93,
        "date": new Date("2013/10/22")
    }, {
        "close": 3346.05,
        "date": new Date("2013/10/23")
    }, {
        "close": 3362.38,
        "date": new Date("2013/10/24")
    }, {
        "close": 3383.83,
        "date": new Date("2013/10/25")
    }]
}, {
    "code": "G035",
    "open": {
        "value": 3213.38,
        "diff": -2.39
    },
    "high": {
        "value": 3355.63,
        "diff": 115.52
    },
    "low": {
        "value": 3212.05,
        "diff": 94.36
    },
    "close": {
        "value": 3353.88,
        "diff": 120.05
    },
    "volume": 1772590000,
    "adjClose": 3353.88,
    "dayClose": [{
        "close": 3256.02,
        "date": new Date("2013/10/14")
    }, {
        "close": 3244.66,
        "date": new Date("2013/10/15")
    }, {
        "close": 3281.67,
        "date": new Date("2013/10/16")
    }, {
        "close": 3301.28,
        "date": new Date("2013/10/17")
    }, {
        "close": 3353.88,
        "date": new Date("2013/10/18")
    }]
}, {
    "code": "G036",
    "open": {
        "value": 3215.77,
        "diff": 25.37
    },
    "high": {
        "value": 3240.11,
        "diff": -16.6
    },
    "low": {
        "value": 3117.69,
        "diff": -69.17
    },
    "close": {
        "value": 3233.83,
        "diff": -8.74
    },
    "volume": 1891806000,
    "adjClose": 3233.83,
    "dayClose": [{
        "close": 3215.69,
        "date": new Date("2013/10/07")
    }, {
        "close": 3153.87,
        "date": new Date("2013/10/08")
    }, {
        "close": 3142.54,
        "date": new Date("2013/10/09")
    }, {
        "close": 3210.84,
        "date": new Date("2013/10/10")
    }, {
        "close": 3233.83,
        "date": new Date("2013/10/11")
    }]
}, {
    "code": "G040",
    "open": {
        "value": 3190.4,
        "diff": -51.92
    },
    "high": {
        "value": 3256.71,
        "diff": 13.28
    },
    "low": {
        "value": 3186.86,
        "diff": -15.89
    },
    "close": {
        "value": 3242.57,
        "diff": 12.27
    },
    "volume": 1793200000,
    "adjClose": 3242.57,
    "dayClose": [{
        "close": 3218.2,
        "date": new Date("2013/09/30")
    }, {
        "close": 3253.05,
        "date": new Date("2013/10/01")
    }, {
        "close": 3253.26,
        "date": new Date("2013/10/02")
    }, {
        "close": 3213.83,
        "date": new Date("2013/10/03")
    }, {
        "close": 3242.57,
        "date": new Date("2013/10/04")
    }]
}, {
    "code": "G044",
    "open": {
        "value": 3242.32,
        "diff": 39.13
    },
    "high": {
        "value": 3243.43,
        "diff": -5.09
    },
    "low": {
        "value": 3202.75,
        "diff": 39.62
    },
    "close": {
        "value": 3230.3,
        "diff": 5.57
    },
    "volume": 1775567100,
    "adjClose": 3230.3,
    "dayClose": [{
        "close": 3219.34,
        "date": new Date("2013/09/23")
    }, {
        "close": 3218.66,
        "date": new Date("2013/09/24")
    }, {
        "close": 3208.55,
        "date": new Date("2013/09/25")
    }, {
        "close": 3234.04,
        "date": new Date("2013/09/26")
    }, {
        "close": 3230.3,
        "date": new Date("2013/09/27")
    }]
}, {
    "code": "G046",
    "open": {
        "value": 3203.19,
        "diff": 57.17
    },
    "high": {
        "value": 3248.52,
        "diff": 59.28
    },
    "low": {
        "value": 3163.13,
        "diff": 17.11
    },
    "close": {
        "value": 3224.73,
        "diff": 46.45
    },
    "volume": 1839474000,
    "adjClose": 3224.73,
    "dayClose": [{
        "close": 3168.69,
        "date": new Date("2013/09/16")
    }, {
        "close": 3190.83,
        "date": new Date("2013/09/17")
    }, {
        "close": 3231.31,
        "date": new Date("2013/09/18")
    }, {
        "close": 3237.61,
        "date": new Date("2013/09/19")
    }, {
        "close": 3224.73,
        "date": new Date("2013/09/20")
    }]
}];

@Injectable()
export class Service {
    getWeekData() {
        return weekData;
    }
}
