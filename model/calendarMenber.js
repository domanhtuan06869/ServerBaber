const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    province: {
        type: String,
        trim: true,
    },
    district: {
        type: String
    },
    address: {
        type: String
    },
    date_menber_cut: {
        type: Date,

    },
    name_menber: {
        type: String,
        trim: true
    },
    phone_menber_cut: {
        type: String
    },
    id_store: {
        type: String
    },
    shift_1: {
        time: {
            type: String,
            default:'8h-8h30'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_2: {
        time: {
            type: String,
            default:'8h30h-9h'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_3: {
        time: {
            type: String,
            default:'9h-9h30'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_4: {
        time: {
            type: String,
            default:'9h30-10h'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_5: {
        time: {
            type: String,
            default:'10h-10h30'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_7: {
        time: {
            type: String,
            default:'10h30-11h'

        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_8: {
        time: {
            type: String,
            default:'11h30-12h'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_9: {
        time: {
            type: String,
            default:'13h30-14h'
        },
        isReady: {
            type: Boolean,
            default: true
        }

    },
    shift_10: {
        time: {
            type: String,
            default:'14h-14h30'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_11: {
        time: {
            type: String,
            default:'14h30-15h'
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_12: {
        time: {
            type: String,
            default:'15h-15h30'            
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_13: {
        time: {
            type: String,
            default:'15h30-16h'            
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_14: {
        time: {
            type: String,
            default:'16h-16h30'            
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_15: {
        time: {
            type: String,
            default:'16h30-17h'            
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_16: {
        time: {
            type: String,
            default:'17h-17h30'            
        },
        isReady: {
            type: Boolean,
            default: true
        }
    },
    shift_17: {
        time: {
            type: String,
            default:'17h30-18h'            
        },
        isReady: {
            type: Boolean,
            default: true
        }
    }
}, { versionKey: false });

module.exports = mongoose.model('calendarMenber', BookSchema);