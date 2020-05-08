const mongoose = require('mongoose');

const schedule = new mongoose.Schema({
    idSchedule: {
        type: String
    },
    locationSchedule: {
        type: String
    },
    timeSchedule: {
        type: String
    },
    dateSchedule: {
        type: String
    },
    stylistSchedule: {
        type: String
    },
    statusSchedule: {
        type: String
    },
    serviceSchedule: {
        type: String
    }
}, { versionKey: false });

module.exports = mongoose.model('schedule', schedule);